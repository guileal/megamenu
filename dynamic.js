async function createDynamicMegamenu() {
	try {
		let menuContentCategories = [];

		const categoriesBody = await requestCategoriesMegamenu(); // REQUEST BODY FOR API

		categoriesBody.forEach((categoriesBody) => {
			let item = new Object();
			item.category = categoriesBody.name;
			item.imageBackground = categoriesBody.image_background
				? categoriesBody.image_background.guid
				: "https://devscripta.com.br/wp-content/uploads/2021/08/service-card-placeholder.jpg";
			//set DEFAULT IMAGE
			menuContentCategories.push(item);
		});

		const navMegamenu = document.querySelector(".megamenu-nav");
		const navMegamenuBg = document.querySelector(".background-image");

		const listWrapper = document.createElement("ul");
		navMegamenu.appendChild(listWrapper);

		menuContentCategories.forEach((menuContentCategories, index) => {
			console.log(`category ${index}: ${menuContentCategories.category}`);
			console.log(
				`background ${index}: ${menuContentCategories.imageBackground}`
			);
			let listCategory = document.createElement("li");
			listWrapper.appendChild(listCategory);

			let categoryNavIcon = document.createElement("img");
			listCategory.appendChild(categoryNavIcon);
			categoryNavIcon.setAttribute("src", "/assets/nav-icon.svg");
			categoryNavIcon.setAttribute("loading", "lazy");

			let categoryLink = document.createElement("a");
			categoryLink.setAttribute("href", "#");
			categoryLink.innerHTML = menuContentCategories.category;
			listCategory.appendChild(categoryLink);

			let categoryBackgroundWrapper = document.createElement("div");
			categoryBackgroundWrapper.setAttribute("id", `${index + 1}`);
			categoryBackgroundWrapper.classList.add("image-wrapper");
			let categoryBackgroundImage = document.createElement("img");
			categoryBackgroundImage.setAttribute(
				"src",
				menuContentCategories.imageBackground
			);
			categoryBackgroundImage.setAttribute("loading", "lazy");
			categoryBackgroundWrapper.appendChild(categoryBackgroundImage);
			navMegamenuBg.appendChild(categoryBackgroundWrapper);
		});
	} catch (e) {
		console.error(`DEU ERRO -> ${e}`);
		//handler for error
	}
}

function controllMegamenuUI() {
	//BASIC CONTROLL: OPEN, CLOSE, QUIT, HOVER ETC
	const megaMenu = document.getElementById("megamenu-wrapper");
	const openMenu = document.getElementById("open-menu");
	const closeMenu = document.querySelectorAll(".close-button");
	const rect = openMenu.querySelectorAll("rect");

	openMenu.addEventListener("click", function () {
		megaMenu.classList.toggle("megamenu-wrapper-active");
		rect.forEach((rect) => {
			rect.classList.toggle("open-menu-active");
		});
	});

	closeMenu.forEach((closeMenu) => {
		closeMenu.addEventListener("click", closeMegaMenu);
	});

	function closeMegaMenu() {
		megaMenu.classList.remove("megamenu-wrapper-active");
	}

	//CONTROL BACKGROUND
	//CHANGED FUNCTIONS ->
	const defaultBackgroundImage = document.querySelector("#default");
	const imagesBackground = document.querySelectorAll(".image-wrapper");
	const megamenuNav = document.querySelector(".megamenu-nav");

	const menuItems = megamenuNav.querySelectorAll("li");

	menuItems.forEach((menuItems) => {
		menuItems.onmouseover = menuItems.onmouseout = hoverListItems;
	});

	function hoverListItems(event) {
		//handler function hover
		if (event.type == "mouseover") {
			changeBackgroundHover(event.target);
			// event.target.style.background = "pink";
		}
		if (event.type == "mouseout") {
			// event.target.style.background = "";
			setDefaultBackground();
		}
	}

	function changeBackgroundHover(nodeItem) {
		const currentHover = nodeItem;
		console.log(`ELEMENTO -> ${currentHover}`);
		if (currentHover.tagName != "IMG") {
			if (currentHover.parentNode.nodeName != "LI") {
				const changedImage = document.querySelector(
					`#${currentHover
						.querySelector("a")
						.text.replace(/ /g, "-")}`
				);
				console.log(`LI -> ${changedImage.getAttribute("id")}`);
				imagesBackground.forEach((imagesBackground) => {
					if (
						imagesBackground.getAttribute("id") !=
						changedImage.getAttribute("id")
					) {
						imagesBackground.style.opacity = "0";
					} else {
						imagesBackground.style.opacity = "1";
					}
				});
			} else {
				const changedImage = document.querySelector(
					`#${currentHover.text.replace(/ /g, "-")}`
				);
				console.log(`A -> ${changedImage.getAttribute("id")}`);
				imagesBackground.forEach((imagesBackground) => {
					if (
						imagesBackground.getAttribute("id") !=
						changedImage.getAttribute("id")
					) {
						imagesBackground.style.opacity = "0";
					} else {
						imagesBackground.style.opacity = "1";
					}
				});
			}
		}
	}
	function setDefaultBackground() {
		imagesBackground.forEach((imagesBackground) => {
			imagesBackground.style.opacity = "0";
		});
		defaultBackgroundImage.style.opacity = "1";
	}

	//DEFAULT CONTROL ->
	setDefaultBackground();
}

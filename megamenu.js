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

	const defaultBackgroundImage = document.querySelector("#default");
	const megamenuNav = document.querySelector(".megamenu-nav");

	const menuItems = megamenuNav.querySelectorAll("li");

	menuItems.forEach((menuItems) => {
		menuItems.onmouseover = menuItems.onmouseout = hoverListItems;
	});

	function hoverListItems(event) { //handler function hover
		if (event.type == "mouseover") {
			event.target.style.background = "pink";
		}
		if (event.type == "mouseout") {
			event.target.style.background = "";
		}
	}
}

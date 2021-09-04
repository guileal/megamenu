function controllMegamenuUI() {
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
}

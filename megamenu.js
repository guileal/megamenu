const megaMenu = document.getElementById("megamenu-wrapper");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.querySelectorAll("close-menu");
const rect = openMenu.querySelectorAll("rect");
openMenu.addEventListener("click", function () {
	megaMenu.classList.toggle("megamenu-wrapper-active");

	console.log(openMenu);
	rect.forEach((rect) => {
		rect.classList.toggle("open-menu-active");
	});
});

closeMenu.addEventListener("click", function () {
	megaMenu.classList.remove("megamenu-wrapper-active");
});

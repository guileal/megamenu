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

    const megamenuNav = document.querySelector(".megamenu-nav");

    const menuItems = megamenuNav.querySelectorAll("li");

    menuItems.forEach((menuItems) => {
        hoverElement(menuItems);
    });

    //DEFAULT CONTROL ->
    setDefaultBackground();
}

function hoverElement(element) {
    element.onmouseover = element.onmouseout = hoverListItems;

    function hoverListItems(event) {
        //handler function hover
        if (event.type == "mouseover") {
            changeBackgroundHover(event.target);
        }
        if (event.type == "mouseout") {
            setDefaultBackground();
        }
    }
}

function changeBackgroundHover(nodeItem) {
    const imagesBackground = document.querySelectorAll(".image-wrapper");
    const currentHover = nodeItem;
    console.log(`ELEMENTO -> ${currentHover}`);
    if (currentHover.tagName != "IMG") {
        if (currentHover.parentNode.nodeName != "LI") {
            const changedImage = document.querySelector(
                `#${currentHover.querySelector("a").text.replace(/ /g, "-")}`
            );
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
    const imagesBackground = document.querySelectorAll(".image-wrapper");
    const defaultBackgroundImage = document.querySelector("#default");
    imagesBackground.forEach((imagesBackground) => {
        imagesBackground.style.opacity = "0";
    });
    defaultBackgroundImage.style.opacity = "1";
}

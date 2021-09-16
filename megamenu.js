function controllMegamenuUI() {
    //BASIC CONTROLL: OPEN, CLOSE, QUIT, HOVER ETC
    const megaMenu = document.getElementById("megamenu-wrapper");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.querySelectorAll(".close-button");
    const backButton = document.getElementById('back-button')
    const rect = openMenu.querySelectorAll("rect");

    backButton.addEventListener("click", function(){
        console.log('entrou eventls')
        let categoryItems = document.querySelectorAll('.category-item')
        console.log(categoryItems)
        categoryItems.forEach(categoryItems =>{
            console.log('entrou foreach')
            categoryItems.classList.remove('disable')
            categoryItems.classList.add('enable')
            if(categoryItems.querySelector('.submenu')){
                categoryItems.querySelector('.submenu').classList.remove('submenu-active')
            }
        })
        backButton.classList.add('disable')
    })

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

    // VARIABLES
    const categories = document.getElementById("categories");
    const categoryItem = categories.querySelectorAll(".category-item");

    // OPEN SUBMENU
    categoryItem.forEach(categoryItem => {
        categoryItem.addEventListener('click', openSubmenu, false)
    })

    //DEFAULT CONTROL ->
    setDefaultBackground();
}





function openSubmenu(event) {

    // chamar a outra funcao
    event.preventDefault();
    if (!event.target.matches(".category-item")) {
        return;
    }

    // navbuttons
    // let btnPrevious = document.querySelector('.btn-previous')
    // let btnNext = document.querySelector('.btn-next')

    // UI
    const backButton = document.getElementById('back-button')
    let clickedItem = event.target;
    const categoriesWrapper = document.querySelector("#categories");
    const categoryItems = categoriesWrapper.querySelectorAll(".categoryItem");
    const subMenus = categoriesWrapper.querySelectorAll(".submenu");

    if (clickedItem.querySelector(".submenu")) {
        let submenuToActive = clickedItem.querySelector(".submenu");
        let liToActive = submenuToActive.parentNode;
        if (submenuToActive.classList.contains("submenu-active")) {
            backButton.classList.add('disable')
            categoryItems.forEach((item) => {
                item.classList.remove("disable");
                item.classList.remove("activeLi");
                item.classList.add("enable");
            });
            subMenus.forEach((item) => {
                item.classList.remove("submenu-active");
            });
        } else {

            backButton.classList.remove('disable')
            //zerando por padrao todos os itens
            categoryItems.forEach((item) => {
                item.classList.remove("enable");
                item.classList.remove("activeLi");
                item.classList.add("disable");
            });
            subMenus.forEach((item) => {
                item.classList.remove("submenu-active");
            });

            liToActive.classList.remove("disable");
            liToActive.classList.add("enable");
            liToActive.classList.add("activeLi");
            submenuToActive.classList.add("submenu-active");

        }

        // scroll
        // let scrollMax = submenuToActive.scrollWidth - submenuToActive.offsetWidth
        // let scrollMin = 0
        // let scrollAmount = 0
        // let itemsCards = submenuToActive.querySelectorAll('ul')
        // let scrollPerCard = Math.floor(Math.floor(scrollMax) / itemsCards.length)

        // btnPrevious.addEventListener('click', ()=>{
        //     console.log(`btnPrev`)
        //     console.log(scrollMax)
        //     console.log(scrollAmount)
        //     console.log(submenuToActive.offsetWidth)
        //     console.log(scrollPerCard)

            
        //     scrollAmount = submenuToActive.scrollLeft
        //     if (scrollAmount <= 0) {
        //         scrollAmount = 0
        //     }else{
        //         scrollAmount -= scrollPerCard
        //     }
        //     submenuToActive.scrollTo({
        //         top: 0,
        //         left: scrollAmount,
        //         behavior: 'smooth'
        //     })
        // })
        
        // btnNext.addEventListener('click', ()=>{
        //     console.log(`btnNext`)
        //     scrollAmount = submenuToActive.scrollLeft
        //     if(scrollAmount >= scrollMax){
        //         scrollAmount = scrollMax
        //     }else{
        //         scrollAmount += scrollPerCard
        //     }

        //     submenuToActive.scrollTo({
        //         top: 0,
        //         left: scrollAmount,
        //         behavior: 'smooth'
        //     })
        // })            
    }
}

function hoverElement(element) {
    element.onmouseover = element.onmouseout = hoverListItems;

    function hoverListItems(event) {
        //handler function hover
        if (event.type == "mouseover") {
            changeBackgroundHover(event.target);
        }
        if (event.type == "mouseout") {
            if (element.tagName == "LI") {
                if (element.querySelector(".submenu")) {
                    let flag = element.querySelector(".submenu");
                    if (flag.classList.contains("submenu-active")) {
                    } else {
                        setDefaultBackground();
                    }
                } else {
                    setDefaultBackground();
                }
            }
            // setDefaultBackground();
        }
    }
}

function changeBackgroundHover(nodeItem) {
    const imagesBackground = document.querySelectorAll(".image-wrapper");
    const currentHover = nodeItem;
    // console.log(`ELEMENTO -> ${currentHover}`);
    if (currentHover.tagName != "IMG") {
        if (currentHover.parentNode.nodeName != "LI") {
            const changedImage = document.querySelector(
                `#${currentHover.querySelector("a").text.replace(/ /g, "-")}`
            );
            if (changedImage) {
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
        } else {
            const changedImage = document.querySelector(
                `#${currentHover.text.replace(/ /g, "-")}`
            );
            if (changedImage) {
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
}

function setDefaultBackground() {
    const imagesBackground = document.querySelectorAll(".image-wrapper");
    const defaultBackgroundImage = document.querySelector("#default");
    imagesBackground.forEach((imagesBackground) => {
        imagesBackground.style.opacity = "0";
    });
    defaultBackgroundImage.style.opacity = "1";
}

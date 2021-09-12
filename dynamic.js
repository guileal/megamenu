async function createDynamicMegamenu() {
    try {
        let menuContentCategories = [];

        const categoriesBody = await requestCategoriesMegamenu(); // REQUEST BODY CATEGOPRIES FOR API

        categoriesBody.forEach((categoriesBody) => {
            let item = new Object();
            item.category = categoriesBody.name;
            item.imageBackground = categoriesBody.image_background
                ? categoriesBody.image_background.guid
                : "https://devscripta.com.br/wp-content/uploads/2021/08/service-card-placeholder.jpg";
            //set DEFAULT IMAGE
            item.slug = categoriesBody.slug;
            item.categoryMegaMenuId = categoriesBody.id;
            // console.log(item);
            menuContentCategories.push(item);
        });

        const navMegamenu = document.querySelector(".megamenu-nav");
        const navMegamenuBg = document.querySelector(".background-image");

        const listWrapper = document.createElement("ul");
        listWrapper.setAttribute("id", "categories");

        navMegamenu.appendChild(listWrapper);

        menuContentCategories.forEach(async (menuContentCategories, index) => {
            let listCategory = document.createElement("li");
            listCategory.className = "categoryItem";
            listCategory.setAttribute(
                "id",
                menuContentCategories.categoryMegaMenuId
            );
            listWrapper.appendChild(listCategory);

            let categoryNavIcon = document.createElement("img");
            listCategory.appendChild(categoryNavIcon);
            categoryNavIcon.setAttribute(
                "src",
                "https://devscripta.com.br/wp-content/uploads/2021/09/nav-icon.svg"
            );
            categoryNavIcon.setAttribute("loading", "lazy");

            let categoryLink = document.createElement("a");
            categoryLink.setAttribute("href", "#");
            categoryLink.innerHTML = menuContentCategories.category;
            listCategory.appendChild(categoryLink);

            let categoryBackgroundWrapper = document.createElement("div");
            categoryBackgroundWrapper.setAttribute(
                "id",
                `${menuContentCategories.category.replace(/ /g, "-")}`
            );
            categoryBackgroundWrapper.classList.add("image-wrapper");
            let categoryBackgroundImage = document.createElement("img");
            categoryBackgroundImage.setAttribute(
                "src",
                menuContentCategories.imageBackground
            );
            categoryBackgroundImage.setAttribute("loading", "lazy");
            categoryBackgroundWrapper.appendChild(categoryBackgroundImage);
            navMegamenuBg.appendChild(categoryBackgroundWrapper);

            let subCategoryRequest = await requestSubCategoriesMegamenu(
                menuContentCategories.categoryMegaMenuId
            );

            if (subCategoryRequest.length > 0) {
                let subMenu = document.createElement("div");
                subMenu.className = "submenu";
                subCategoryRequest.forEach((subCategoryRequest) => {
                    let subMenuWrappList = document.createElement("ul");
                    subMenu.appendChild(subMenuWrappList);
                    let titleSubMenu = document.createElement("div");
                    titleSubMenu.className = "title-item";
                    titleSubMenu.innerHTML = subCategoryRequest.title.rendered;
                    subMenuWrappList.appendChild(titleSubMenu);
                    let imageTitle = document.createElement("img");
                    imageTitle.setAttribute(
                        "src",
                        subCategoryRequest.imagem_de_destaque.guid
                    );
                    imageTitle.setAttribute("loading", "lazy");
                    titleSubMenu.appendChild(imageTitle);
                    let subItems = subCategoryRequest._subcategory_data;
                    subItems.forEach((subItems) => {
                        let valueLI = document.createElement("li");
                        let valueLink = document.createElement("a");
                        valueLink.setAttribute("href", subItems.link_value);
                        valueLink.innerHTML = subItems.item_value;
                        valueLI.appendChild(valueLink);
                        subMenuWrappList.appendChild(valueLI);
                    });
                });
                listCategory.appendChild(subMenu);
            }
        });
    } catch (e) {
        console.error(`DEU ERRO -> ${e}`);
        //handler for error
        const mainMenu = document.getElementsByClassName("main-nav")[0];
        const itemsStatic = mainMenu.querySelectorAll("li");

        const anchorMenu = document.querySelector(".megamenu-nav");
        const wrapper = document.createElement("ul");

        itemsStatic.forEach((itemsStatic) => {
            let item = itemsStatic;
            let listItem = document.createElement("li");
            wrapper.appendChild(listItem);

            let navImage = document.createElement("img");
            navImage.setAttribute(
                "src",
                "https://devscripta.com.br/wp-content/uploads/2021/09/nav-icon.svg"
            );
            navImage.setAttribute("loading", "lazy");
            listItem.appendChild(navImage);

            let navLink = document.createElement("a");
            navLink.setAttribute(
                "href",
                `/${item.innerText.replace(/ /g, "-")}`
            );
            navLink.innerHTML = item.innerText;
            listItem.appendChild(navLink);
        });

        anchorMenu.appendChild(wrapper);
    }
}

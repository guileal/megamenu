function createDynamicMegamenu() {
  let menuContent = [];

  let category = ["tratamentos clínicos", "tratamentos estéticos"];
  let imageBackground = [
    "/assets/megamenu (1).png",
    "/assets/megamenu (2).png",
  ];
  // populandoa array de teste
  for (var i = 0; i < 2; i++) {
    let item = new Object();

    item.category = category[i];
    item.imageBackground = imageBackground[i];

    menuContent.push(item);
  }

  console.log(`array: ${menuContent}`);

  const navMegamenu = document.querySelector(".megamenu-nav");
  const navMegamenuBg = document.querySelector(".background-image");

  const listWrapper = document.createElement("ul");
  navMegamenu.appendChild(listWrapper);

  menuContent.forEach((menuContent, index) => {
    console.log(`category ${index}: ${menuContent.category}`);
    console.log(`background ${index}: ${menuContent.imageBackground}`);
    let listCategory = document.createElement("li");
    listWrapper.appendChild(listCategory);

    let categoryNavIcon = document.createElement("img");
    listCategory.appendChild(categoryNavIcon);
    categoryNavIcon.setAttribute("src", "/assets/nav-icon.svg");
    categoryNavIcon.setAttribute("loading", "lazy");

    let categoryLink = document.createElement("a");
    categoryLink.setAttribute("href", "#");
    categoryLink.innerHTML = menuContent.category;
    listCategory.appendChild(categoryLink);

    let categoryBackgroundWrapper = document.createElement("div");
    categoryBackgroundWrapper.classList.add("image-wrapper");
    let categoryBackgroundImage = document.createElement("img");
    categoryBackgroundImage.setAttribute("src", menuContent.imageBackground);
    categoryBackgroundImage.setAttribute("loading", "lazy");
    categoryBackgroundWrapper.appendChild(categoryBackgroundImage);
    navMegamenuBg.appendChild(categoryBackgroundWrapper);
  });
}

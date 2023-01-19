const menuBtn = document.querySelector("#set-menu");
const sideMenu = document.querySelector(".side-menu");
const CLICKED = "clicked";

const slideMenu = () => {
  sideMenu.classList.toggle(CLICKED);
};

menuBtn.addEventListener("click", slideMenu);
sideMenu.addEventListener("click", slideMenu);

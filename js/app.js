// variables for hamber menu btn
const menuContainer = document.querySelector(".navbar-menu");
const hamberMenuBtn = document.querySelector(".navbar-hamber-icon");
let menuFlag = false;

// function for click on the menu btn
const openListMenu = () => {
  menuFlag = !menuFlag;

  hamberMenuBtn.firstElementChild.className = menuFlag
    ? "ri-close-line"
    : "ri-menu-line";

  menuContainer.classList.toggle("show");

  menuContainer.classList.contains("show")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
};

// function for resize the page and remove show class
const removeShowClassOfMenuByResize = () => {
  if (window.innerWidth > 786) {
    if (menuContainer.classList.contains("show")) {
      menuContainer.classList.remove("show");
      hamberMenuBtn.firstElementChild.className = "ri-menu-line";
      menuFlag = false;
    }
  }
};

// event for whene user click on the menu btn
hamberMenuBtn.addEventListener("click", openListMenu);

// event for remove show class of menu
window.addEventListener("resize", removeShowClassOfMenuByResize);

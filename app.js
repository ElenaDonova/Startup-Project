let shopButton = document.querySelector(".menu-button");
let dropdown = document.querySelector(".dropdown");

shopButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (
    e.target === document.querySelector(".hero-container") ||
    e.target === document.querySelector(".hero-left") ||
    e.target === document.querySelector(".hero-right")
  ) {
    dropdown.classList = "dropdown";
    menuSidebar.classList = "menu-sidebar";
  }
});

let burgerMenu = document.querySelector(".menu-burger");

let menuSidebar = document.querySelector(".menu-sidebar");
burgerMenu.addEventListener("click", () => {
  menuSidebar.classList.toggle("active-sidebar");
 
});


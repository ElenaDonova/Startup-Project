// SIDEBAR

let shopButton = document.querySelector(".menu-button");
let dropdown = document.querySelector(".dropdown");
let wrapper = document.querySelector(".dropdown-wrapper")

shopButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("active");
  wrapper.classList.toggle("active-wr")
});

window.addEventListener("click", (e) => {
  if (
    e.target === document.querySelector(".hero-container") ||
    e.target === document.querySelector(".hero-left") ||
    e.target === document.querySelector(".hero-right")
  ) {
    dropdown.classList = "dropdown";
    menuSidebar.classList = "menu-sidebar";
    wrapper.classList = "dropdown-wrapper";
  }
});

let burgerMenu = document.querySelector(".menu-burger");
let menuSidebar = document.querySelector(".menu-sidebar");

burgerMenu.addEventListener("click", () => {
  menuSidebar.classList.toggle("active-sidebar");
  burgerMenu.classList.toggle("open");
  
});

// BURGER

// SLIDER

const slider = document.querySelector(".dropdown-second-column__slider");
const images = document.querySelectorAll(
  ".dropdown-second-column__image-slider"
);

let slideNumber = 1;

const buttons = document.querySelectorAll(".circle");
buttons[0].style.backgroundColor = "#1E0E62";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    slider.style.transform = `translateX(-${i * 570}px)`;
    resetBg();
    slideNumber = i + 1;
    button.style.backgroundColor = "#1E0E62";
  });
});

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "#1E0E62";
};

// ACCORDION

const accordion = document.getElementsByClassName("contents-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active-accordion");
  });
}
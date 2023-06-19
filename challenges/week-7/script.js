const dot = document.querySelector(".dot");
const logo = document.querySelector(".logo_img");

let root = document.querySelector(":root");
let dark = false;

dot.addEventListener("click", () => {
  root.classList.toggle("dark-theme");
  dark = !dark;
  if (dark) {
    logo.src = "./assets/logo-dark.svg";
  } else {
    logo.src = "./assets/logo.svg";
  }
});

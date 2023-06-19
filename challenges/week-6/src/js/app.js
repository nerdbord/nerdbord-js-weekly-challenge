const menuButton = document.querySelector("div.menu-button");
const menu = document.querySelector("div.app-menu");

menuButton.addEventListener("click", () => {
  const state = menu.getAttribute("data-state");
  if (state === "hide") {
    menuButton.setAttribute("data-state", "show");
    menu.setAttribute("data-state", "show");
  } else {
    menuButton.setAttribute("data-state", "hide");
    menu.setAttribute("data-state", "hide");
  }
});



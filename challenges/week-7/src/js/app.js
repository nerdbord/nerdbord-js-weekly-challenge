if (window.matchMedia("(prefers-color-scheme: dark)")) {
  document.querySelector("body").setAttribute("data-theme", "dark");
} else {
  document.querySelector("body").setAttribute("data-theme", "light");
}

const menuButton = document.querySelector("div.theme-switcher");

menuButton.addEventListener("click", () => {
  const theme = document.querySelector("body").getAttribute("data-theme");
  if (theme === "light") {
    document.querySelector("body").setAttribute("data-theme", "dark");
  } else {
    document.querySelector("body").setAttribute("data-theme", "light");
  }
});

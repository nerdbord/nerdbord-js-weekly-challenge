const icon = document.querySelector(".nav-icon");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const bars = document.querySelectorAll(".nav-icon div");

icon.addEventListener("click", () => {
    icon.classList.toggle("icon-active");
})
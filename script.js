const img = document.querySelector(".img");
const container = document.createElement("div");
const title = document.createElement("h2");
const desc = document.createElement("p");

img.addEventListener("mouseenter", () => {
    container.classList.add("container-hover");
    title.classList.add("title-hover");
    desc.classList.add("desc-hover");
    title.innerText = "Project name";
    desc.innerHTML = "10 / 02 / 2023";
    img.appendChild(container);
    container.appendChild(title);
    container.appendChild(desc);
})

img.addEventListener("mouseleave", () => {
    img.removeChild(container);
})
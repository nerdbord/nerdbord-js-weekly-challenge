const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.classList.remove("bounceout");
    setTimeout(function() {
        modal.classList.add("bouncein")
    }, 0);
}

function closeModal() {
    setTimeout(function() {
        modal.classList.add("hidden")
    }, 450);
    setTimeout(function() {
        overlay.classList.add("hidden")
    }, 300);
    modal.classList.remove("bouncein");
    setTimeout(function() {
        modal.classList.add("bounceout")
    }, 0);
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
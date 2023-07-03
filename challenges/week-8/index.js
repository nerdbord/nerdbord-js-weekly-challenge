const quest = document.getElementById("question-first");
const arrow = document.querySelector(".question__arrow-first");
const desc = document.querySelector(".question__description");

const toggle = () => {
  arrow.addEventListener("click", (e) => {
    if (arrow === e.target) {
      quest.classList.toggle("question__border-first");
      arrow.classList.toggle("question__arrow-first");
      desc.classList.toggle("question__description");
    } else if (e.target % 2 === 0) {
      desc.style = "display: none";
    }
  });
};
toggle();

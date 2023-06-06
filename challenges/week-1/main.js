"use strict";

const NUMBER_ROWS = 7;
const NUMBER_COLUMNS = 20;
const dotsContainer = document.querySelector(".dots-container");
const dots = [];
const timeoutID = [];
const lightedDots = [];

const generateDots = (rows, columns) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      dots.push(dot);
      dotsContainer.appendChild(dot);
    }
  }
};
generateDots(NUMBER_ROWS, NUMBER_COLUMNS);

const randomDotsAnimation = () => {
  for (let index = 0; index < dots.length; index++) {
    let time = Math.floor(Math.random() * 3000);
    timeoutID.push(
      setTimeout(() => {
        dots[index].classList.add("dot-flashing-animation");
      }, time)
    );
  }
};
randomDotsAnimation();

const lightDot = (row, column) => {
  const toLight = dots[(row - 1) * NUMBER_COLUMNS + column - 1];
  lightedDots.push(toLight);
  toLight.classList.add("on");
};
dotsContainer.addEventListener("mouseenter", () => {
  timeoutID.forEach((id) => {
    clearTimeout(id);
  });
  dots.forEach((dot) => {
    dot.classList.remove("dot-flashing-animation");
  });
  // U
  lightDot(2, 2);
  lightDot(3, 2);
  lightDot(4, 2);
  lightDot(5, 2);
  lightDot(6, 2);
  lightDot(2, 4);
  lightDot(3, 4);
  lightDot(4, 4);
  lightDot(5, 4);
  lightDot(6, 4);
  lightDot(6, 3);

  // N
  lightDot(2, 6);
  lightDot(3, 6);
  lightDot(4, 6);
  lightDot(5, 6);
  lightDot(6, 6);
  lightDot(2, 9);
  lightDot(3, 9);
  lightDot(4, 9);
  lightDot(5, 9);
  lightDot(6, 9);
  lightDot(4, 7);
  lightDot(5, 8);

  // I
  lightDot(2, 11);
  lightDot(3, 11);
  lightDot(4, 11);
  lightDot(5, 11);
  lightDot(6, 11);
  // T
  lightDot(2, 13);
  lightDot(2, 14);
  lightDot(3, 14);
  lightDot(4, 14);
  lightDot(5, 14);
  lightDot(6, 14);
  lightDot(2, 15);

  // E
  lightDot(2, 17);
  lightDot(2, 18);
  lightDot(2, 19);
  lightDot(3, 17);
  lightDot(4, 17);
  lightDot(4, 18);
  lightDot(4, 19);
  lightDot(5, 17);
  lightDot(6, 17);
  lightDot(6, 18);
  lightDot(6, 19);
});

dotsContainer.addEventListener("mouseleave", () => {
  lightedDots.forEach((dot) => {
    dot.classList.remove("on");
  });
  randomDotsAnimation();
});

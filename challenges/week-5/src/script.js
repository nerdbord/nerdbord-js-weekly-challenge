const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentData = `${day} / 0${month} / ${year}`;
console.log(currentData);

const showData = document.querySelector(".showData");
showData.textContent = currentData;

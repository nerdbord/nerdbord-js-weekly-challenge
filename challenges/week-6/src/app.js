const btnShow = document.querySelector(".btnShow");
const topNav = document.querySelector(".topNav");
const middleNav = document.querySelector(".middleNav");
const bottomNav = document.querySelector(".bottomNav");
const hiImg = document.querySelector(".hiImg");

function check() {
	const classMap = [
		{ navElement: topNav, activeClass: "activeTop" },
		{ navElement: middleNav, activeClass: "activeMiddle" },
		{ navElement: bottomNav, activeClass: "activeBottom" },
	];

	for (const { navElement, activeClass } of classMap) {
		if (navElement.classList.contains(activeClass)) {
			navElement.classList.remove(activeClass);
			hiImg.classList.remove("activeImg");
		} else {
			navElement.classList.add(activeClass);
			hiImg.classList.add("activeImg");
		}
	}
}

btnShow.addEventListener("click", check);

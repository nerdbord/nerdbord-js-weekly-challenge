const btnShow = document.querySelector(".btnShow");
const topNav = document.querySelector(".topNav");
const middleNav = document.querySelector(".middleNav");
const bottomNav = document.querySelector(".bottomNav");

function check() {
	const classMap = [
		{ navElement: topNav, activeClass: "activeTop" },
		{ navElement: middleNav, activeClass: "activeMiddle" },
		{ navElement: bottomNav, activeClass: "activeBottom" },
	];

	for (const { navElement, activeClass } of classMap) {
		navElement.classList.toggle(
			activeClass,
			!navElement.classList.contains(activeClass)
		);
	}
}

btnShow.addEventListener("click", check);

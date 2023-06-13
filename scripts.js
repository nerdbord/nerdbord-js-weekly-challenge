const divAtributte = document.querySelector('.bars');
const navi = document.querySelector('.nav');

const barsTransformation = () => {
	const dataAtribute = divAtributte.getAttribute('data-state');
	if (dataAtribute === 'hide') {
		divAtributte.setAttribute('data-state', 'show');
		navOpen();
	} else {
		divAtributte.setAttribute('data-state', 'hide');
		navOpen();
	}
};

const navOpen = () => {
	navi.classList.toggle('nav-activ');
};

divAtributte.addEventListener('click', barsTransformation);

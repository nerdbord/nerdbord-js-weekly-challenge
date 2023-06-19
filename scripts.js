const body = document.querySelector('body');
const btnMode = document.querySelector('.dot');

btnMode.addEventListener('click', () => {
	const dataAtribute = body.getAttribute('data-mode');
	if (dataAtribute === 'light') {
		body.setAttribute('data-mode', 'dark');
	} else {
		body.setAttribute('data-mode', 'light');
	}
});

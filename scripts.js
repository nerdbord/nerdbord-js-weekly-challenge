const btn = document.querySelector('.center');
const divNav = document.querySelector('.nav')

const active = () => {
	btn.classList.toggle('active');
  showMenu()
};

const showMenu = () => {
divNav.classList.toggle('nav-active')  
}
btn.addEventListener('click', active);
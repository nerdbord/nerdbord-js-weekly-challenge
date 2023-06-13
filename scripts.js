const btn = document.querySelector('.center');
const divNav = document.querySelector('.nav');
const navElements = document.querySelectorAll('.nav__ul--li')

const active = () => {
	btn.classList.toggle('active');
  showMenu()
};

const showMenu = () => {
divNav.classList.toggle('nav-active')  
}
btn.addEventListener('click', active);
navElements.forEach(li => {
  li.addEventListener('click', () => {
    console.log(`clicked`);
  })
})

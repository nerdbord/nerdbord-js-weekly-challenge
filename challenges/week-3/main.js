const openButton = document.getElementById('open-button');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButton = document.getElementById('close-button');
const backdrop = document.getElementById('backdrop');

const handleOpen = () => {
    modal.style.display = 'block';
    const timeout = setTimeout(() => modalContent.classList.add('animate'), 100);
}

const handleClose = () => {
    modalContent.classList.remove('animate');
    const timeout = setTimeout(() => modal.style.display = 'none', 100);
}


const handleAnimations = () => {
    openButton.addEventListener('click', () => handleOpen());
    closeButton.addEventListener('click', () => handleClose());
    backdrop.addEventListener('click', () => handleClose());
}


handleAnimations();
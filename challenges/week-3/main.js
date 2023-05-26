
const openButton = document.getElementById('open-button');
const myModal = document.getElementById('myModal');
const modal = document.getElementById('modal-container');
const closeButton = document.getElementById('close-button');


const handleOpen = () => {
    modal.classList.add('animate');
    const wait = setTimeout(() => {
        document.body.addEventListener('click', () => {
            const backdrop = document.querySelector('.modal-backdrop');
            backdrop.style.display = 'none';
            myModal.style.display = 'none';
            modal.classList.remove('animate');
        });
    }, 1000)
}

const handleClose = () => {
    modal.classList.remove('animate');
    document.body.removeEventListener('click', () => {
    });

}


const handleAnimations = () => {
    openButton.addEventListener('click', () => {
        const myTimeout = setTimeout(handleOpen, 100);
    });
    closeButton.addEventListener('click', () => {
        const myTimeout = setTimeout(handleClose, 100);
    });
}


handleAnimations();
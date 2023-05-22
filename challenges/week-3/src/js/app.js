class WeeklyChallenge3 {
    constructor() {
        this.buttonMain = document.querySelector('button.btn[data-btn-name="main"]');
        this.buttonModal = document.querySelector('button.btn[data-btn-name="modal"]');
        this.modalWrapper = document.querySelector('.modal-wrapper');
        this.modalBox = document.querySelector('.modal-box');

        this.addMainButtonHandler();
        this.addModalButtonHandler();
        this.addModalWrapperHandler();

    }

    hideModal() {
        this.modalBox.classList.remove('box-anim');
        this.modalWrapper.classList.remove('show');
    }

    showModal() {
        this.modalWrapper.classList.add('show');
        this.modalBox.classList.add('box-anim');
    }

    addModalWrapperHandler() {
        this.modalWrapper.addEventListener('click', (event) => {
            if (event.target === this.modalWrapper) {
                this.hideModal();
            }
        })
    }

    addMainButtonHandler() {
        this.buttonMain.addEventListener('click', () => {
           this.showModal();
        })
    }

    addModalButtonHandler() {
        this.buttonModal.addEventListener('click', () => {
            this.hideModal();
        })
    }

    run() {

    }

}

new WeeklyChallenge3();

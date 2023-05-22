import { ModalProps } from '../../types/types';

const Modal = ({ setIsClicked }: ModalProps) => {
	const handleCloseModal = () => {
		setIsClicked(false);
	};
	return (
		<div className='modal'>
			<p className='modal--text'>
				Wow, bouncy! Now, let’s wrap it up and close me back.
			</p>
			<button onClick={handleCloseModal} className='modal-button'>
				Let’s close
			</button>
		</div>
	);
};
export default Modal;

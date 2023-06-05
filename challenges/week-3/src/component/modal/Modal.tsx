import { ModalProps } from '../../types/types';

import './modal.css';

const Modal = ({ isClicked, setIsClicked }: ModalProps) => {
	const handleCloseModal = () => {
		setIsClicked(false);
	};
	return (
		<div
			className={
				isClicked ? 'modal modal--animation' : 'modal modal--closeAnimation'
			}
		>
			<p className='modal--text'>Wow, bouncy!</p>
			<p className='modal--text'>Now, let’s wrap it up and close me back.</p>
			<button onClick={handleCloseModal} className='modal--button'>
				Let’s close
			</button>
		</div>
	);
};
export default Modal;

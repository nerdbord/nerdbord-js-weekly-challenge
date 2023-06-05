import { InitialProps } from '../../types/types';
import './initialDisplay.css'
const InitialDisplay = ({ setIsClicked }: InitialProps) => {
	const handleOpenModal = () => {
		setIsClicked(true);
	};
	return (
		<div className='initial-text--container'>
			<p className='initial--text'>Pop me up like one of your bubble wraps.</p>
			<button onClick={handleOpenModal} className='initial--button'>
				pop it!
			</button>
		</div>
	);
};
export default InitialDisplay;

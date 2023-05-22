import { useState } from 'react';
import './App.css';
import InitialDisplay from '../initialDisplay/InitialDisplay';
import Modal from '../modal/Modal';

function App() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<section className='modal--container'>
			{isClicked ? (
				<Modal setIsClicked={setIsClicked} />
			) : (
				<InitialDisplay setIsClicked={setIsClicked} />
			)}
		</section>
	);
}

export default App;

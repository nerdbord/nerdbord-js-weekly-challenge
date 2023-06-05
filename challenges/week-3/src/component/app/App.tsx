import { useState } from 'react';
import './App.css';
import InitialDisplay from '../initialDisplay/InitialDisplay';
import Modal from '../modal/Modal';

function App() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<section
			className={
				isClicked ? 'modal--container modal--background' : 'modal--container '
			}
		>
			{isClicked ? (
				<Modal isClicked={isClicked} setIsClicked={setIsClicked} />
			) : (
				<InitialDisplay setIsClicked={setIsClicked} />
			)}
		</section>
	);
}

export default App;

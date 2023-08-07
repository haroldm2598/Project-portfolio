import { useState } from 'react';
import Button from '../component/Button';

function HomePage() {
	// TESTING ONLY SHOULD REPLACE BY CONTEXTAPI and REDUCER
	const [mouseClick, setMouseClick] = useState('');

	function handleClick() {
		setMouseClick((oldState) => {
			return (oldState = 'testing lang bro');
		});
	}
	return (
		<>
			<h1>Hello welcome to HomePage</h1>
			<Button name='testing' handleClick={handleClick} />
			<h2>{mouseClick}</h2>
		</>
	);
}

export default HomePage;

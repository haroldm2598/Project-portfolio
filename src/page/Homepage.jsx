import { useState } from 'react';
import Button from '../component/Button';
import image from '../assets/image/homepage.png';

function HomePage() {
	// TESTING ONLY SHOULD REPLACE BY CONTEXTAPI and REDUCER
	const [mouseClick, setMouseClick] = useState('');

	function handleClick() {}
	return (
		<>
			<div className='my-5 flex flex-col items-center justify-center'>
				<div>
					<img src={image} alt='image' />
				</div>
				<h1 className='px-auto py-0 text-6xl'>
					Hello there welcome to my portfolio site where i can show case my
					works and experience.
				</h1>
				<Button name='testing' handleClick={handleClick} />
			</div>
		</>
	);
}

export default HomePage;

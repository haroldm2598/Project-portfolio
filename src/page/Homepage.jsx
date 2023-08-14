import { Link } from 'react-router-dom';
import Button from '../component/Button';
import image from '../assets/image/homepage.png';
import { FaArrowRight } from 'react-icons/fa6';

function HomePage() {
	function handleClick() {}
	return (
		<>
			<div className='my-32 flex flex-col lg:flex-row items-center justify-center lg:mx-20 lg:my-10'>
				<div className='relative lg:w-3/4 lg:flex-1'>
					<div className='z-10'>
						<img src={image} alt='image' />
					</div>

					{/* <div className='w-full h-full absolute top-0 left-0 z-0 rotate-180'>
						<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
							<path
								fill='#AF8142'
								d='M41.9,-33.1C55.1,-16.9,67.1,0.6,63.6,13.9C60.1,27.2,41,36.4,25,39.2C9,42.1,-3.9,38.5,-23.1,34.5C-42.3,30.4,-67.8,25.8,-73.4,13.3C-79.1,0.7,-64.8,-19.8,-49.3,-36.6C-33.8,-53.3,-16.9,-66.3,-1.3,-65.3C14.3,-64.2,28.7,-49.3,41.9,-33.1Z'
								transform='translate(100 100)'
							/>
						</svg>
					</div> */}
				</div>

				<div className='flex flex-col items-center lg:px-24 lg:flex-1'>
					<h1 className='px-12 py-4 mb-10 text-6xl lg:px-32'>
						Hello there welcome to my portfolio site where i can show case my
						works and experience.
					</h1>
					<Link to='/About'>
						<Button
							customClass='w-101 bg-bgcolor400 text-bgwhite'
							handleClick={handleClick}
						>
							<p className='text-4xl'>learn about myself</p>
							<span className='mt-2 ml-5 text-5xl'>
								<FaArrowRight />
							</span>
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default HomePage;

import { Link } from 'react-router-dom';

function Footer() {
	return (
		<>
			<footer className='w-full h-48 flex flex-col justify-center items-center text-6xl bg-bgcolor500/40  lg:px-20 lg:flex-row lg:justify-around'>
				<div className='order-2 lg:order-1'>
					<h1>@ copyright 2023, harold mag-isa</h1>
				</div>
				<div className='w-96 mb-8 order-1 flex flex-row justify-between text-6xl lg:order-2 lg:mb-0'>
					<Link to='https://github.com/haroldm2598'>
						<div>Github</div>
					</Link>
					<Link to='https://www.linkedin.com/in/haroldmagisa/'>
						<div>LinkedIn</div>
					</Link>
					<Link to='https://twitter.com/Mahayrolddd'>
						<div>Twitter</div>
					</Link>
				</div>
			</footer>
		</>
	);
}

export default Footer;

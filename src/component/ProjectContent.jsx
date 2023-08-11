import Button from './Button';
// import image from '../assets/image/homepage.png';

function ProjectContent(props) {
	return (
		<>
			<section className='my-10 flex flex-col justify-center items-center lg:mx-20 lg:flex-row lg:justify-around'>
				<div
					className={`order-1 lg:order-${props.orderImage} max-w-4xl h-full`}
				>
					<img src={props.image} alt='Test Image' />
				</div>
				<div
					className={`order-2 lg:order-${props.orderInfo} flex flex-col justify-center items-center lg:max-w-4xl`}
				>
					<h1 className='self-start mb-4 text-6xl font-inter font-semibold'>
						{props.title}
					</h1>
					<p className='mb-4 text-4xl font-inter lg:mb-8 lg:leading-12'>
						{props.info}
					</p>
					<p className='self-start mb-4 text-4xl font-inter font-medium'>
						{props.techStack}
					</p>
					<div className='[&>*]:my-10 [&>*]:lg:m-5 lg:flex lg:flex-row'>
						<Button name='live preview' />
						<Button name='source code' />
					</div>
				</div>
			</section>
		</>
	);
}

export default ProjectContent;

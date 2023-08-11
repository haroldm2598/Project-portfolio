import { useContext } from 'react';
import Button from './Button';
import { ButtonContext } from '../page/Projectpage';

function ProjectContent(props) {
	const { setButtonTheme } = useContext(ButtonContext);

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
						<div onMouseEnter={(e) => setButtonTheme(true)}>
							<Button name='live preview' />
						</div>
						<div onMouseEnter={(e) => setButtonTheme(false)}>
							<Button name='source code' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ProjectContent;

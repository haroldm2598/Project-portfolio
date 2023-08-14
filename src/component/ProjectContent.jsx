import { FaCode } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import Button from './Button';

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
						<Button customClass='w-96 bg-bgcolor400 text-bgwhite'>
							<p className='text-4xl'>live preview</p>
							<span className='mt-2 ml-5 text-5xl'>
								<CgWebsite />
							</span>
						</Button>
						<Button customClass='w-96 bg-bgwhite text-bgcolor100 border-bgcolor400 border-2'>
							<p className='text-4xl'>source code</p>
							<span className='mt-2 ml-5 text-5xl'>
								<FaCode />
							</span>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}

export default ProjectContent;

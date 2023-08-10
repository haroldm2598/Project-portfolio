import Button from './Button';

function ProjectContent() {
	return (
		<>
			<section className='my-10 flex flex-col justify-center items-center'>
				<div>
					<img src='' alt='' />
				</div>
				<h1 className='self-start mb-4 text-6xl font-inter font-semibold'>
					This is project sample
				</h1>
				<p className='mb-4 text-4xl font-inter'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam
					perspiciatis, doloremque dolorum ad quis accusamus nobis, accusantium
					incidunt, exercitationem facilis. Libero temporibus, porro quaerat
					tenetur reprehenderit consequatur numquam incidunt!
				</p>
				<p className='mb-4 text-4xl font-inter font-medium'></p>
				<div className='[&>*]:p-4'>
					<Button name='live preview' />
					<Button name='source code' />
				</div>
			</section>
		</>
	);
}

export default ProjectContent;

import { Link } from 'react-router-dom';
import Button from '../component/Button';

function AboutPage() {
	return (
		<>
			<section className='h-full mx-8 my-20 flex flex-col justify-between items-center'>
				<h1 className='text-12xl uppercase font-bold text-bgcolor100 opacity-20'>
					about
				</h1>
				<div className='mb-10'>
					<h2 className='mb-5 text-5xl font-medium'>
						hello i&#180;m harold mag-isa
					</h2>
					<p className='text-4xl leading-12 tracking-wide'>
						A passionate self motivated web developer and proficient in react,
						sass and next. Where i do showcase my work in web development. It
						has creavity and solving problem from implementing website
					</p>
				</div>
				<Link to='/Project'>
					<Button name='project'></Button>
				</Link>
			</section>
			<section className='min-h-0 px-10 py-20 bg-bgcolor100/40 flex flex-col justify-center items-center'>
				<h1 className='my-10 text-12xl uppercase font-bold text-bgcolor600 leading-14 opacity-40'>
					get in touch
				</h1>
				<input
					type='text'
					placeholder='name'
					className='w-full h-24 mb-4 px-2 text-4xl rounded-lg'
				/>
				<input
					type='text'
					placeholder='email'
					className='w-full h-24 mb-4 px-2 text-4xl rounded-lg'
				/>
				<textarea
					name='message'
					placeholder='message'
					className='w-full h-40 mb-8 px-2 text-4xl rounded-lg'
				></textarea>
				<Link to='/'>
					<Button name='Submit'></Button>
				</Link>
			</section>
		</>
	);
}

export default AboutPage;

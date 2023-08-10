import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../component/Button';

function AboutPage() {
	return (
		<>
			<section className='h-full mx-8 my-20 flex flex-col justify-between items-center lg:mx-20'>
				<h1 className='font-poppins text-12xl uppercase font-bold text-bgcolor100 opacity-20 lg:self-end'>
					about
				</h1>
				<div className='mb-10'>
					<h2 className='mb-5 font-inter text-5xl font-medium'>
						hello i&#180;m harold mag-isa
					</h2>
					<p className='text-4xl font-inter leading-12 tracking-wide'>
						A passionate self motivated web developer and proficient in react,
						sass and next. Where i do showcase my work in web development. It
						has creavity and solving problem from implementing website. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Totam amet
						architecto quia nemo! Quas, reiciendis iusto possimus esse saepe
						numquam cupiditate nemo alias earum ipsum corporis repudiandae ea
						assumenda vel.
					</p>
				</div>
				<Link to='/Project'>
					<Button name='projects'>
						<span className='mt-2 ml-5 text-5xl'>
							<FaArrowRight />
						</span>
					</Button>
				</Link>
			</section>
			<section className='min-h-0 px-10 py-20 bg-bgcolor100/40 flex flex-col justify-center items-center lg:px-20'>
				<h1 className='my-10 font-poppins text-12xl uppercase font-bold text-bgcolor600 leading-14 opacity-40 lg:self-start'>
					get in touch
				</h1>
				<div className='lg:my-10 lg:w-152'>
					<input
						type='text'
						placeholder='name'
						className='w-full h-24 mb-4 px-2 text-4xl rounded-lg placeholder:font-medium placeholder:opacity-50'
					/>
					<input
						type='text'
						placeholder='email'
						className='w-full h-24 mb-4 px-2 text-4xl rounded-lg placeholder:font-medium placeholder:opacity-50'
					/>
					<textarea
						name='message'
						placeholder='message'
						className='w-full h-40 mb-8 px-2 text-4xl rounded-lg placeholder:font-medium placeholder:opacity-50'
					></textarea>
				</div>
				<Link to='/'>
					<Button name='Submit'></Button>
				</Link>
			</section>
		</>
	);
}

export default AboutPage;

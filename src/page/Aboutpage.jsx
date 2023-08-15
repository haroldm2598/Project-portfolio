// REACT
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

// COMPONENTS
import Button from '../component/Button';

function AboutPage() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const inTouchControls = useAnimation();
	const inTouchInputControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			inTouchControls.start('visible');
			inTouchInputControls.start('visible');
		}
	}, [isInView]);

	return (
		<>
			<section className='h-full mx-8 my-20 flex flex-col justify-between items-center lg:h-screen lg:mx-20 lg:py-10 lg:justify-normal lg:gap-y-10'>
				<h1 className='font-poppins text-12xl uppercase font-bold text-bgcolor100 opacity-20 animate-toRight lg:self-end'>
					about
				</h1>
				<div className='mb-10 animate-toLeft lg:mx-40'>
					<h2 className='mb-5 font-inter text-5xl font-medium'>
						hello i&#180;m harold mag-isa
					</h2>
					<p className='text-4xl font-inter leading-13 tracking-wide'>
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
					<Button customClass='w-96 bg-bgcolor400 text-bgwhite animate-toTop'>
						<p className='text-4xl'>projects</p>
						<span className='mt-2 ml-5 text-5xl'>
							<FaArrowRight />
						</span>
					</Button>
				</Link>
			</section>
			<section
				ref={ref}
				className='min-h-0 px-10 py-20 bg-bgcolor100/40 flex flex-col justify-center items-center lg:px-20'
			>
				<motion.div
					variants={{
						hidden: { opacity: 0, x: 100 },
						visible: { opacity: 1, x: 0 }
					}}
					initial='hidden'
					animate={inTouchControls}
					transition={{ duration: 1.5, delay: 0.5 }}
				>
					<h1 className='my-10 font-poppins text-12xl uppercase font-bold text-bgcolor600 leading-14 opacity-40 lg:self-start'>
						get in touch
					</h1>
				</motion.div>

				<motion.div
					variants={{
						hidden: { opacity: 0, y: 100 },
						visible: { opacity: 1, y: 0 }
					}}
					initial='hidden'
					animate={inTouchInputControls}
					transition={{ duration: 1, delay: 0.25 }}
				>
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
						<Button customClass='w-96 bg-bgcolor400 text-bgwhite animate-toTop'>
							<p className='text-4xl'>Submit</p>
						</Button>
					</Link>
				</motion.div>
			</section>
		</>
	);
}

export default AboutPage;

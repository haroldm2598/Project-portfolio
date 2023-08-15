// REACT FEATURES
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// REACT ICONS
import { FaCode } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';

// COMPONENT
import Button from './Button';

function ProjectContent(props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const inLeftControl = useAnimation();
	const inRightControl = useAnimation();

	useEffect(() => {
		if (isInView) {
			inLeftControl.start('visible');
			inRightControl.start('visible');
		}
	}, [isInView]);

	return (
		<>
			<section
				ref={ref}
				className='my-10 flex flex-col justify-center items-center lg:mx-20 lg:flex-row lg:justify-around'
			>
				{/* <motion.div
					variants={{
						hidden: { opacity: 0, x: props.orderImagePosition },
						visible: { opacity: 1, x: 0 }
					}}
					initial='hidden'
					animate={inRightControl}
					transition={{ duration: 1.5, delay: 0.5 }}
				> */}
				<div
					className={`order-1 lg:order-${props.orderImage} max-w-4xl h-full`}
				>
					<img src={props.image} alt='Test Image' />
				</div>
				{/* </motion.div> */}

				{/* <motion.div
					variants={{
						hidden: { opacity: 0, x: props.orderInfoPosition },
						visible: { opacity: 1, x: 0 }
					}}
					initial='hidden'
					animate={inLeftControl}
					transition={{ duration: 1.5, delay: 0.5 }}
				> */}
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
				{/* </motion.div> */}
			</section>
		</>
	);
}

export default ProjectContent;

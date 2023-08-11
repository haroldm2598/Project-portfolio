import { createContext, useState } from 'react';
import ProjectContent from '../component/ProjectContent';
import { projectObjects } from '../data/index';

export const ButtonContext = createContext(null);

function ProjectPage() {
	const [buttonTheme, setButtonTheme] = useState(true);

	const dataMap = projectObjects.map((item) => (
		<ProjectContent
			key={item.title}
			title={item.title}
			techStack={item.techStack.join(' ')}
			info={item.info}
			image={item.image}
			orderImage={item.orderImage}
			orderInfo={item.orderInfo}
		/>
	));

	return (
		<>
			<ButtonContext.Provider value={{ buttonTheme, setButtonTheme }}>
				<div className='text-10xl font-poppins uppercase font-bold text-center text-bgcolor100 opacity-20 lg:mx-20 lg:text-12xl lg:text-right'>
					<h1>project</h1>
				</div>
				<section className='my-10 px-10'>{dataMap}</section>
			</ButtonContext.Provider>
		</>
	);
}

export default ProjectPage;

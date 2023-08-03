import './assets/style/main.scss';

import {
	createHashRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';

// Layout
import RootLayout from './layout/RootLayout';

// Page
import HomePage from './page/Homepage';
import AboutPage from './page/Aboutpage';
import ProjectPage from './page/Projectpage';

function App() {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route path='About' element={<AboutPage />} />
				<Route path='Project' element={<ProjectPage />} />
			</Route>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

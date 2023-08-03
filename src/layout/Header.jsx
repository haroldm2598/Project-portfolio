import { Link, NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			<header>
				<nav>
					<h1>
						<Link to='/'>Testing Logo</Link>
					</h1>
					<div>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/About'>About</NavLink>
						<NavLink to='/Project'>Project</NavLink>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;

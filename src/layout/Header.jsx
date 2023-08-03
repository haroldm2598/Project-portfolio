import { Link, NavLink } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa6';

function Header() {
	return (
		<>
			<header className='header mx-5'>
				<h1 className='header__logo'>
					<Link to='/'>logo</Link>
				</h1>

				<nav className='header__nav'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/About'>About</NavLink>
					<NavLink to='/Project'>Project</NavLink>
				</nav>

				<div className='header__menuIcon'>
					<span>
						<FaAlignJustify />
					</span>
				</div>
			</header>
			<hr />
		</>
	);
}

export default Header;

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa6';

function Header() {
	const [isShow, SetIsShow] = useState(false);

	function handleNavbarShow() {
		SetIsShow((oldState) => !oldState);
	}
	return (
		<>
			<header className='header mx-5 lg:mx-20'>
				<h1 className='header__logo'>
					<Link to='/'>logo</Link>
				</h1>

				<nav
					className={`${
						isShow
							? 'header__nav'
							: 'lg:order-2 lg:flex lg:justify-around lg:items-center lg:text-7xl lg:w-full hidden'
					}`}
				>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/About'>About</NavLink>
					<NavLink to='/Project'>Project</NavLink>
				</nav>

				<div className='header__menuIcon' onClick={handleNavbarShow}>
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

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
							: 'lg:order-2 lg:w-104 lg:flex lg:justify-between lg:items-center lg:text-7xl lg:font-medium  hidden'
					}`}
				>
					<NavLink
						to='/'
						className="lg:hover:text-bgcolor100 lg:relative after:content-[' '] after:h-1 after:w-full after:bg-bgcolor100 after:absolute after:left-0 after:-bottom-4 after:opacity-0 after:transition-all hover:after:opacity-100"
					>
						Home
					</NavLink>
					<NavLink
						to='/About'
						className="lg:hover:text-bgcolor100 lg:relative after:content-[' '] after:h-1 after:w-full after:bg-bgcolor100 after:absolute after:left-0 after:-bottom-4 after:opacity-0 after:transition-all hover:after:opacity-100"
					>
						About
					</NavLink>
					<NavLink
						to='/Project'
						className="lg:hover:text-bgcolor100 lg:relative after:content-[' '] after:h-1 after:w-full after:bg-bgcolor100 after:absolute after:left-0 after:-bottom-4 after:opacity-0 after:transition-all hover:after:opacity-100"
					>
						Project
					</NavLink>
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

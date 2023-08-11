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
						className="lg:hover:text-bgcolor100 lg:relative lg:after:content-[' '] lg:after:h-1 lg:after:w-full lg:after:bg-bgcolor100 lg:after:absolute lg:after:left-0 lg:after:-bottom-4 lg:after:opacity-0 lg:after:transition-all lg:after:duration-500 lg:hover:after:opacity-100"
					>
						Home
					</NavLink>
					<NavLink
						to='/About'
						className="lg:hover:text-bgcolor100 lg:relative lg:after:content-[' '] lg:after:h-1 lg:after:w-full lg:after:bg-bgcolor100 lg:after:absolute lg:after:left-0 lg:after:-bottom-4 lg:after:opacity-0 lg:after:transition-all lg:after:duration-500 lg:hover:after:opacity-100"
					>
						About
					</NavLink>
					<NavLink
						to='/Project'
						className="lg:hover:text-bgcolor100 lg:relative lg:after:content-[' '] lg:after:h-1 lg:after:w-full lg:after:bg-bgcolor100 lg:after:absolute lg:after:left-0 lg:after:-bottom-4 lg:after:opacity-0 lg:after:transition-all lg:after:duration-500 lg:hover:after:opacity-100"
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

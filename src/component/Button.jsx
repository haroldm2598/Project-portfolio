function Button({ name, handleClick, children }) {
	return (
		<>
			<button
				className='w-96 h-28 flex flex-row justify-center items-center text-4xl font-medium bg-bgcolor400 text-bgwhite rounded-xl'
				onClick={handleClick}
			>
				{name} {children}
			</button>
		</>
	);
}

export default Button;

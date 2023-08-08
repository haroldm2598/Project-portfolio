function Button({ name, handleClick, childrem }) {
	return (
		<>
			<button
				className='w-96 h-28 text-4xl font-medium bg-bgcolor400 text-bgwhite rounded-xl'
				onClick={handleClick}
			>
				{name} {childrem}
			</button>
		</>
	);
}

export default Button;

function Button({ name, handleClick, customClass, children }) {
	return (
		<>
			<button
				className={`${customClass} h-28 flex flex-row justify-center items-center text-4xl font-medium rounded-xl  childOdd:duration-200 childOdd:hover:-translate-x-2 childEven:duration-200 childEven:hover:translate-x-2`}
				onClick={handleClick}
			>
				{name} {children}
			</button>
		</>
	);
}

export default Button;

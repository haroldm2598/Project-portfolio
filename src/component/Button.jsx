import { useContext } from 'react';
import { ButtonContext } from '../page/Projectpage';

function Button({ name, handleClick, children }) {
	const { buttonTheme } = useContext(ButtonContext);

	return (
		<>
			<button
				className={`w-96 h-28 flex flex-row justify-center items-center text-4xl font-medium   rounded-xl ${
					buttonTheme
						? 'bg-bgcolor400 text-bgwhite'
						: 'bg-bgwhite text-bgcolor100 border-bgcolor400 border-2'
				}`}
				onClick={handleClick}
			>
				{name} {children}
			</button>
		</>
	);
}

export default Button;

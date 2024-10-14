import React from 'react';
import { ButtonProps } from '../../types/FormTypes';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className="rounded border border-white/30 bg-white/20 px-4 py-2 text-white shadow-lg transition-all duration-300 hover:bg-lime-600 focus:bg-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:ring-offset-lime-500"
		>
			{children}
		</button>
	);
};

export default Button;

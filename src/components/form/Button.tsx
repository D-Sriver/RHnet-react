import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props} className="rounded bg-lime-600/70 px-4 py-2 text-white">
			{children}
		</button>
	);
};

export default Button;

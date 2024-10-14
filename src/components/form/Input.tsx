import React from 'react';
import { InputProps } from '../../types/FormTypes';

const Input: React.FC<InputProps> = ({ label, name, id, ...props }) => {
	const inputId = id || name;

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="mb-1 font-medium text-white/70">
				{label}
			</label>
			<input
				{...props}
				id={inputId}
				name={name}
				className="rounded-md border border-gray-300/50 bg-transparent px-3 py-2 text-white backdrop-blur-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
			/>
		</div>
	);
};

export default Input;

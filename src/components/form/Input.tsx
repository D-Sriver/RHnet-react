import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string; // Assurez-vous que 'name' est toujours fourni
}

const Input: React.FC<InputProps> = ({ label, name, id, ...props }) => {
	const inputId = id || name; // Utilisez l'id fourni ou le nom comme fallback

	return (
		<div className="flex flex-col">
			<label htmlFor={inputId} className="mb-1 font-medium text-gray-700">
				{label}
			</label>
			<input
				{...props}
				id={inputId}
				name={name}
				className="rounded-md border border-gray-300/50 bg-white/50 px-3 py-2 backdrop-blur-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
			/>
		</div>
	);
};

export default Input;

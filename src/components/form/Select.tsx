import React from 'react';
import { SelectProps } from '../../types/FormTypes';

const Select: React.FC<SelectProps> = ({
	label,
	name,
	id,
	options,
	...props
}) => {
	const selectId = id || name;

	return (
		<div className="flex flex-col">
			<label htmlFor={selectId} className="mb-1 font-medium text-white/70">
				{label}
			</label>
			<select
				{...props}
				id={selectId}
				name={name}
				className="rounded-md border border-gray-300/50 bg-transparent px-3 py-2 text-white backdrop-blur-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;

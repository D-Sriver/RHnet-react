import React from 'react';
import { FieldsetProps } from '../../types/FormTypes';

const Fieldset: React.FC<FieldsetProps> = ({ children }) => {
	return (
		<fieldset className="rounded-lg border border-gray-300/50 bg-white/20 p-4 shadow-md">
			<div className="space-y-4">{children}</div>
		</fieldset>
	);
};

export default Fieldset;

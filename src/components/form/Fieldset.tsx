import React from 'react';

interface FieldsetProps {
	legend: string;
	children: React.ReactNode;
}

const Fieldset: React.FC<FieldsetProps> = ({ children }) => {
	return (
		<fieldset className="mb-6 rounded-lg border border-gray-300/50 bg-white/20 p-4 shadow-md backdrop-blur-sm">
			<div className="space-y-4">{children}</div>
		</fieldset>
	);
};

export default Fieldset;

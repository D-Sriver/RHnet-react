import React, { useState } from 'react';
import Button from '../../components/form/Button';
import Fieldset from '../../components/form/Fieldset';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import { departments } from '../../utils/departments';
import { stateOptions } from '../../utils/states';

const EmployeeForm: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		startDate: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
		department: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto max-w-2xl space-y-6 rounded-xl bg-white/40 p-8 shadow-lg backdrop-blur-md"
		>
			<Fieldset legend="Personal Information">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Input
						label="First Name"
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
					/>
					<Input
						label="Last Name"
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
					/>
					<Input
						label="Date of Birth"
						type="date"
						name="dateOfBirth"
						value={formData.dateOfBirth}
						onChange={handleChange}
					/>
					<Input
						label="Start Date"
						type="date"
						name="startDate"
						value={formData.startDate}
						onChange={handleChange}
					/>
				</div>
			</Fieldset>

			<Fieldset legend="Address">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Input
						label="Street"
						type="text"
						name="street"
						value={formData.street}
						onChange={handleChange}
					/>
					<Input
						label="City"
						type="text"
						name="city"
						value={formData.city}
						onChange={handleChange}
					/>
					<Select
						label="State"
						name="state"
						value={formData.state}
						onChange={handleChange}
						options={stateOptions}
					/>
					<Input
						label="Zip Code"
						type="text"
						name="zipCode"
						value={formData.zipCode}
						onChange={handleChange}
					/>
				</div>
			</Fieldset>

			<Fieldset legend="Department">
				<Select
					label="Department"
					name="department"
					value={formData.department}
					onChange={handleChange}
					options={departments}
				/>
			</Fieldset>

			<div className="flex justify-end">
				<Button type="submit">Save</Button>
			</div>
		</form>
	);
};

export default EmployeeForm;

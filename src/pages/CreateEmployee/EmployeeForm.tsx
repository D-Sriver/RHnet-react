import { DatePicker } from '@sriver/date-picker-react-v2';
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
		state: 'AL',
		zipCode: '',
		department: 'sales',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleDateChange = (name: string) => (date: Date) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: date.toISOString().split('T')[0],
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto max-w-4xl space-y-6 rounded-xl bg-white/40 p-8 shadow-lg backdrop-blur-md"
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
					<div className="relative z-10">
						<label className="mb-1 block font-medium text-gray-700">
							Date of Birth
						</label>
						<DatePicker
							name="dateOfBirth"
							onChange={handleDateChange('dateOfBirth')}
							initialDate={
								formData.dateOfBirth
									? new Date(formData.dateOfBirth)
									: undefined
							}
						/>
					</div>
					<div className="relative z-10">
						<label className="mb-1 block font-medium text-gray-700">
							Start Date
						</label>
						<DatePicker
							name="startDate"
							onChange={handleDateChange('startDate')}
							initialDate={
								formData.startDate ? new Date(formData.startDate) : undefined
							}
						/>
					</div>
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

			<div className="flex justify-center">
				<Button type="submit">Save</Button>
			</div>
		</form>
	);
};

export default EmployeeForm;
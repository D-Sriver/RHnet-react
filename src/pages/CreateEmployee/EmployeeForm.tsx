import { DatePicker } from '@sriver/date-picker-react-v2';

import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/form/Button';
import Fieldset from '../../components/form/Fieldset';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import Modal from '../../components/Modal';
import { addEmployee } from '../../store/employeeSlice';
import { PropsPicker } from '../../utils/datepickerProps';
import { departments } from '../../utils/departments';
import {
	addressFields,
	dateFields,
	personalInfoFields,
} from '../../utils/formFields';
import { initialFormData } from '../../utils/initialFormData';
import { stateOptions } from '../../utils/states';

const EmployeeForm: React.FC = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState(initialFormData);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const formRef = useRef<HTMLFormElement>(null);
	const submitIntentional = useRef(false);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const { name, value } = e.target;
			setFormData((prevData) => ({ ...prevData, [name]: value }));
		},
		[]
	);

	const handleDateChange = useCallback(
		(name: string) => (date: Date) => {
			setFormData((prevData) => ({
				...prevData,
				[name]: date.toISOString().split('T')[0],
			}));
		},
		[]
	);

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (submitIntentional.current) {
				console.log(formData);
				dispatch(addEmployee(formData));
				setIsModalOpen(true);
				setFormData(initialFormData);
				submitIntentional.current = false;
			}
		},
		[formData, dispatch]
	);

	const handleSaveClick = useCallback(() => {
		submitIntentional.current = true;
		formRef.current?.requestSubmit();
	}, []);

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="mx-auto max-w-4xl space-y-6 rounded-xl bg-transparent p-8 shadow-lg backdrop-blur-md"
			>
				<Fieldset legend="Personal Information">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{personalInfoFields.map((field) => (
							<Input
								key={field.name}
								label={field.label}
								type={field.type}
								name={field.name}
								value={formData[field.name as keyof typeof formData]}
								onChange={handleChange}
							/>
						))}
						{dateFields.map((field) => (
							<div key={field.name} className="relative z-20">
								<label className="mb-1 block font-medium text-white/70">
									{field.label}
								</label>
								<DatePicker
									name={field.name}
									{...PropsPicker}
									onChange={handleDateChange(field.name)}
									initialDate={
										formData[field.name as keyof typeof formData]
											? new Date(
													formData[
														field.name as keyof typeof formData
													] as string
												)
											: undefined
									}
								/>
							</div>
						))}
					</div>
				</Fieldset>

				<Fieldset legend="Address">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{addressFields.map((field) => (
							<Input
								key={field.name}
								label={field.label}
								type={field.type}
								name={field.name}
								value={formData[field.name as keyof typeof formData]}
								onChange={handleChange}
							/>
						))}
						<Select
							label="State"
							name="state"
							value={formData.state}
							onChange={handleChange}
							options={stateOptions}
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
					<Button type="button" onClick={handleSaveClick}>
						Save
					</Button>
				</div>
			</form>
			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
				<p>L'employé a été créé avec succès !</p>
			</Modal>
		</>
	);
};

export default EmployeeForm;

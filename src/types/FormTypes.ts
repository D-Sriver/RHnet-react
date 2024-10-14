import { Employee } from './Employee_type';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
}

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	name: string;
	options: Option[];
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export interface FieldsetProps {
	legend: string;
	children: React.ReactNode;
}

export interface Option {
	value: string;
	label: string;
}

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export interface EmployeeFormData extends Employee {
	// Ajoutez ici les propriétés supplémentaires si nécessaire
}

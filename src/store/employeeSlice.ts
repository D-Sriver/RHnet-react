import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../types/EmployeeTableProps_type';
import { EmployeeFormData } from '../types/FormTypes';
import { SortKey } from '../types/SortKey';
import { initialFormData } from '../utils/initialFormData';

interface EmployeeState {
	employees: Employee[];
	sortConfig: {
		key: SortKey | null;
		direction: 'ascending' | 'descending';
	};
	formData: EmployeeFormData;
}

const initialState: EmployeeState = {
	employees: [],
	sortConfig: {
		key: null,
		direction: 'ascending',
	},
	formData: initialFormData,
};

const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		setEmployees: (state, action: PayloadAction<Employee[]>) => {
			state.employees = action.payload;
		},
		setSortConfig: (
			state,
			action: PayloadAction<EmployeeState['sortConfig']>
		) => {
			state.sortConfig = action.payload;
		},
		updateFormData: (
			state,
			action: PayloadAction<Partial<EmployeeFormData>>
		) => {
			state.formData = { ...state.formData, ...action.payload };
		},
		resetFormData: (state) => {
			state.formData = initialFormData;
		},
		addEmployee: (state, action: PayloadAction<Employee>) => {
			state.employees.push(action.payload);
		},
	},
});

export const {
	setEmployees,
	setSortConfig,
	updateFormData,
	resetFormData,
	addEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../types/Employee_type';

interface EmployeeState {
	employees: Employee[];
}

const loadEmployeesFromLocalStorage = (): Employee[] => {
	const storedEmployees = localStorage.getItem('employees');
	return storedEmployees ? JSON.parse(storedEmployees) : [];
};

const initialState: EmployeeState = {
	employees: loadEmployeesFromLocalStorage(),
};

const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action: PayloadAction<Employee>) => {
			state.employees.push(action.payload);
			localStorage.setItem('employees', JSON.stringify(state.employees));
		},
		setEmployees: (state, action: PayloadAction<Employee[]>) => {
			state.employees = action.payload;
		},
	},
});

export const { addEmployee, setEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;

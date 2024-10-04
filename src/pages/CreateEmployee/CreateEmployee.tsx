import EmployeeForm from './EmployeeForm';

export default function CreateEmployee() {
	return (
		<div className="container mx-auto mt-4 p-4">
			<h1 className="mb-4 text-center text-3xl font-bold">Create Employee</h1>
			<EmployeeForm />
		</div>
	);
}

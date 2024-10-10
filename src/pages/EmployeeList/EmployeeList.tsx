import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setEmployees } from '../../store/employeeSlice';
import EmployeeTable from './EmployeeTable';

export default function EmployeeList() {
	const dispatch = useDispatch();
	const employees = useSelector(
		(state: RootState) => state.employees.employees
	);
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [entriesPerPage, setEntriesPerPage] = useState(10);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setCurrentPage(1);
	};

	const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setEntriesPerPage(Number(e.target.value));
		setCurrentPage(1);
	};

	useEffect(() => {
		const storedEmployees = localStorage.getItem('employees');
		if (storedEmployees && employees.length === 0) {
			dispatch(setEmployees(JSON.parse(storedEmployees)));
		}
	}, [dispatch, employees.length]);

	const filteredEmployees = employees.filter((employee) =>
		Object.values(employee).some((value) =>
			value.toString().toLowerCase().includes(searchTerm.toLowerCase())
		)
	);

	const indexOfLastEmployee = currentPage * entriesPerPage;
	const indexOfFirstEmployee = indexOfLastEmployee - entriesPerPage;
	const currentEmployees = filteredEmployees.slice(
		indexOfFirstEmployee,
		indexOfLastEmployee
	);

	const totalPages = Math.ceil(filteredEmployees.length / entriesPerPage);

	return (
		<div className="container mx-auto mt-4 p-4">
			<h1 className="mb-4 text-center text-3xl font-bold text-white">
				Current Employees
			</h1>
			<div className="rounded-xl bg-white/40 p-8 shadow-lg backdrop-blur-md">
				<div className="mb-4 flex items-center justify-between">
					<div className="flex items-center">
						<span className="mr-2 text-white">Show</span>
						<select
							value={entriesPerPage}
							onChange={handleEntriesChange}
							className="rounded border border-gray-300/50 bg-white/20 px-2 py-1 text-white focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500 focus:ring-offset-lime-500"
						>
							<option value={10}>10</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
						</select>
						<span className="ml-2 text-white">entries</span>
					</div>
					<div className="flex items-center">
						<input
							type="text"
							placeholder="Search..."
							value={searchTerm}
							onChange={handleSearchChange}
							className="self-auto rounded-md border border-white/30 bg-slate-950/20 px-3 py-1 text-slate-50 backdrop-blur-sm placeholder:text-white focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
						/>
					</div>
				</div>
				{filteredEmployees.length > 0 ? (
					<>
						<EmployeeTable employees={currentEmployees} />
						<div className="mt-4 flex items-center justify-between">
							<span className="text-white">
								Showing {indexOfFirstEmployee + 1} to{' '}
								{Math.min(indexOfLastEmployee, filteredEmployees.length)} of{' '}
								{filteredEmployees.length} entries
							</span>
							<div className="flex items-center justify-end gap-2">
								<button
									onClick={() =>
										setCurrentPage((prev) => Math.max(prev - 1, 1))
									}
									disabled={currentPage === 1}
									className="mr-2 rounded border border-white/20 bg-white/10 px-3 py-1 text-white transition-all duration-300 hover:bg-lime-600/50 disabled:opacity-80"
								>
									Previous
								</button>
								<span className="mx-2 text-white">
									Page {currentPage} of {totalPages}
								</span>
								<button
									onClick={() =>
										setCurrentPage((prev) => Math.min(prev + 1, totalPages))
									}
									disabled={currentPage === totalPages}
									className="ml-2 rounded border border-white/20 bg-white/10 px-3 py-1 text-white transition-all duration-300 hover:bg-lime-600/50 disabled:opacity-80"
								>
									Next
								</button>
							</div>
						</div>
					</>
				) : (
					<p className="text-center text-white">No employees found.</p>
				)}
			</div>
		</div>
	);
}

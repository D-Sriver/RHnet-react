import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSortConfig } from '../../store/employeeSlice';
import { Employee } from '../../types/Employee_type';
import { SortKey } from '../../types/SortKey';
import headers from '../../utils/headerData';

interface EmployeeTableProps {
	employees: Employee[];
}

export default function EmployeeTable({ employees }: EmployeeTableProps) {
	const dispatch = useDispatch();
	const { sortConfig } = useSelector((state: RootState) => state.employees);

	const sortedEmployees = useMemo(() => {
		const sortableEmployees = [...employees];
		if (sortConfig.key !== null) {
			sortableEmployees.sort((a, b) => {
				if (a[sortConfig.key!] < b[sortConfig.key!]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key!] > b[sortConfig.key!]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableEmployees;
	}, [employees, sortConfig]);

	const requestSort = (key: SortKey) => {
		let direction: 'ascending' | 'descending' = 'ascending';
		if (sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		dispatch(setSortConfig({ key, direction }));
	};

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full overflow-hidden rounded-2xl">
				<thead>
					<tr className="bg-white/20">
						{headers.map(({ key, label }) => (
							<th
								key={key}
								className="min-w-[120px] border-b-2 border-white/40 px-4 py-2 text-left font-semibold text-white"
							>
								<button
									className="flex w-full items-center justify-between"
									onClick={() => requestSort(key)}
								>
									<span>{label}</span>
									<span className="ml-1 text-xs">
										<span
											className={
												sortConfig.key === key &&
												sortConfig.direction === 'ascending'
													? 'text-xl text-lime-500'
													: 'text-sm text-white/50'
											}
										>
											▲
										</span>
										<span
											className={
												sortConfig.key === key &&
												sortConfig.direction === 'descending'
													? 'text-xl text-lime-500'
													: 'text-sm text-white/50'
											}
										>
											▼
										</span>
									</span>
								</button>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{sortedEmployees.map((employee, index) => (
						<tr
							key={index}
							className={`border-b border-white/40 ${
								index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
							} transition-colors duration-200 hover:bg-lime-500/20`}
						>
							{headers.map(({ key }: { key: SortKey }) => (
								<td key={key} className="px-4 py-2 text-white">
									{employee[key as keyof Employee]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

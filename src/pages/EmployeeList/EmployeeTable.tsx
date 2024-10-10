import { EmployeeTableProps } from '../../types/EmployeeTableProps_type';

export default function EmployeeTable({ employees }: EmployeeTableProps) {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full overflow-hidden rounded-2xl">
				<thead>
					<tr className="bg-white/20">
						{[
							'First Name',
							'Last Name',
							'Start Date',
							'Department',
							'Date of Birth',
							'Street',
							'City',
							'State',
							'Zip Code',
						].map((header) => (
							<th
								key={header}
								className="min-w-[120px] border-b-2 border-white/40 px-4 py-2 text-left font-semibold text-white"
							>
								<div className="flex items-center justify-between">
									<span>{header}</span>
									<div className="ml-1 flex flex-col">
										<span className="text-xs leading-none">▲</span>
										<span className="text-xs leading-none">▼</span>
									</div>
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{employees.map((employee, index) => (
						<tr
							key={index}
							className={`border-b border-white/40 ${
								index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'
							}`}
						>
							{Object.values(employee).map((value, cellIndex) => (
								<td
									key={cellIndex}
									className={`px-4 py-2 text-white ${
										cellIndex % 2 === 0 ? 'bg-white/10' : ''
									}`}
								>
									{value}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

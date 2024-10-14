import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '../store';
import { setCurrentPage } from '../store/navigationSlice';
import LogoRhnet from '/LogoRhnetNologo.avif';

export default function Header() {
	const dispatch = useDispatch();
	const location = useLocation();
	const currentPage = useSelector(
		(state: RootState) => state.navigation.currentPage
	);

	useEffect(() => {
		dispatch(setCurrentPage(location.pathname));
	}, [location, dispatch]);

	const getLinkClass = (path: string) => {
		return `${currentPage === path ? 'border-b-2 border-white' : ''} `;
	};

	return (
		<header className="fixed inset-x-0 top-0 z-50 h-16 bg-white/20 p-4 shadow-md backdrop-blur-lg">
			<div className="flex items-center justify-between text-xl md:text-lg">
				<div className="flex items-center">
					<img src={LogoRhnet} alt="RHnet Logo" className="mr-2 size-10" />
					<h1 className="text-2xl font-bold text-white">HRnet</h1>
				</div>
				<nav className="flex gap-4">
					<Link
						to="/create-employee"
						className={`text-white ${getLinkClass('/create-employee')}`}
					>
						Home
					</Link>
					<Link
						to="/employee-list"
						className={`text-white ${getLinkClass('/employee-list')}`}
					>
						Current Employees
					</Link>
				</nav>
			</div>
		</header>
	);
}

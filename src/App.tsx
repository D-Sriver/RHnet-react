import { Provider } from 'react-redux';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import Header from './components/Header';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="min-h-screen bg-gray-100">
					<Header />
					<main className="pt-16">
						<Routes>
							<Route
								path="/"
								element={<Navigate to="/create-employee" replace />}
							/>
							<Route path="/create-employee" element={<CreateEmployee />} />
							<Route path="/employee-list" element={<EmployeeList />} />
						</Routes>
					</main>
				</div>
			</Router>
		</Provider>
	);
}

export default App;

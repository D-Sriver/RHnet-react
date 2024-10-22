import { Provider } from 'react-redux';
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import { store } from './store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="min-h-screen bg-gradient-to-br from-lime-800 via-black/90 to-lime-900">
					<Header />
					<main className="pt-16">
						<Routes>
							<Route
								path="/"
								element={<Navigate to="/create-employee" replace />}
							/>
							<Route path="/create-employee" element={<CreateEmployee />} />
							<Route path="/employee-list" element={<EmployeeList />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
				</div>
			</Router>
		</Provider>
	);
}

export default App;

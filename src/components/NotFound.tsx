import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './form/Button';

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	const handleReturn = () => {
		navigate('/');
	};

	return (
		<div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center text-white">
			<h1 className="mb-4 text-4xl font-bold">404 - Page non trouvée</h1>
			<p className="mb-8 text-xl">
				Désolé, la page que vous recherchez n'existe pas.
			</p>
			<Button onClick={handleReturn}>Retour à l'accueil</Button>
		</div>
	);
};

export default NotFound;

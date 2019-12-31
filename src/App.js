import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// COMPONENTS
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Routes from './components/Routes';

const App = () => {

	return (

		<Router>
			<div>

				<Header />
				<Routes />
				<Footer />

			</div>
		</Router>
	);
}

export default App;

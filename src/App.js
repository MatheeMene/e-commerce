import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/shared/Header/Header';
// import Footer from './components/shared/Footer/Footer';
import Home   from './components/Home/Home';

const App = () => {

	return (

		<Router>
			<div>

				<Header />

				<Switch>
					<Route exact path="/" component={ Home } />
				</Switch>

				{/* <Footer /> */}

			</div>
		</Router>
	);
}

export default App;

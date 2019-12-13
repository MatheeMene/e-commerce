import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// COMPONENTS
import Header        from './components/shared/Header/Header';
import Footer        from './components/shared/Footer/Footer';
import Products      from './components/Products/Products';
import Home          from './components/Home/Home';
import CreateProduct from './components/CreateProduct/CreateProduct';
import SignUp        from './components/SignUp/SignUp';

const App = () => {

	return (

		<Router>
			<div>

				<Header />

				<Switch>
					<Route exact path="/"           component={ Home } />
					<Route exact path="/products"   component={ Products } />
					<Route exact path="/addproduct" component={ CreateProduct } />
					<Route exact path="/signup"     component={ SignUp } />
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// COMPONENTS
import Header        from './components/shared/Header/Header';
import Footer        from './components/shared/Footer/Footer';
import ChooseService from './components/ChooseService/ChooseService';
import Home          from './components/Home/Home';
import CreateProduct from './components/CreateProduct/CreateProduct';
import SignUp        from './components/SignUp/SignUp';
import WeekOffers    from './components/WeekOffer/WeekOffer';
import AllProducts   from './components/AllProducts/AllProducts';
import ProductPage   from './components/ProductPage/ProductPage';

const App = () => {

	return (

		<Router>
			<div>

				<Header />

				<Switch>
					<Route exact path="/"             component={ Home } />
					<Route exact path="/services"     component={ ChooseService } />
					<Route exact path="/addproduct"   component={ CreateProduct } />
					<Route exact path="/signup"       component={ SignUp } />
					<Route exact path="/weekoffer"    component={ WeekOffers } />
					<Route exact path="/allproducts"  component={ AllProducts } />
					<Route exact path="/productpage"  component={ ProductPage } />
				</Switch>

				<Footer />
			</div>
		</Router>
	);
}

export default App;

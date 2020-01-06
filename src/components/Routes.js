import React                       from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated }         from '../services/Authentic';
//Components
import ChooseService from './ChooseService/ChooseService';
import Home          from './Home/Home';
import CreateProduct from './CreateProduct/CreateProduct';
import SignUp        from './SignUp/SignUp';
import WeekOffers    from './WeekOffer/WeekOffer';
import AllProducts   from './AllProducts/AllProducts';
import ProductPage   from './ProductPage/ProductPage';
import NotFound      from './NotFound/NotFound';
import Login         from './Login/Login';
import Cart          from './Cart/Cart';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
					<Redirect to={{ pathname: "/", state: { from: props.location } }} />
				)
		}
	/>
);

const Routes = () => (

	<Switch>
		<Route exact path="/"                component={ Home }          />
		<Route exact path="/services"        component={ ChooseService } />
		<Route exact path="/addproduct"      component={ CreateProduct } />
		<Route exact path="/signup"          component={ SignUp }        />
		<Route exact path="/weekoffer"       component={ WeekOffers }    />
		<Route exact path="/allproducts"     component={ AllProducts }   />
		<Route exact path="/productpage/:id" component={ ProductPage }   />
		<Route exact path="/login"           component={ Login }         />
		<Route exact path="/cart"            component={ Cart }          />
		<Route component={ NotFound }                                    />
	</Switch>
);

export default Routes;
import React    from 'react';
import { Link } from 'react-router-dom';
//Components
import { isAuthenticated, removeToken } from '../../../services/Authentic';
//Style
import 'normalize.css';
import './Header.css';

const Header = () => {

	const logout = () => {
		removeToken();
		window.location.reload();
	}

	const SignUpOrLogin = () => (

		isAuthenticated() ? (
			<Link className='header-links' to='/' onClick={ () => logout() } >Logout</Link>
		) : (
			<Link className='header-links' to='/login'>Login</Link>
		)
	);
	
	return(
		<header className='navbar'>
			<div className='logo'>
				<Link to='/'>Perfumyla</Link>
			</div>
			<div className='header-list'>
				<Link className='header-links' to='/about'>
					About
				</Link>
				<Link className='header-links' to='/services'>
					Services
				</Link>
				<Link className='header-links' to='/profile'>
					Profile
				</Link>
				<SignUpOrLogin />
			</div>
		</header>
	);

}

export default Header;
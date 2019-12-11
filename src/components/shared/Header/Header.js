import React from 'react';
//STYLE
import './Header.css'
import Logo from '../../../assets/images/logo.png'

const Header = () => {
	
  return(
    <header className="navbar">
			<ul className="nav-list-left">
				<li><a>Home</a></li>
				<li><a>Products</a></li>
			</ul>
			<img className="logo" src={ Logo } />
			<ul className="nav-list-right">
				<li><a>Algo</a></li>
				<li><a>Login</a></li>
			</ul>
    </header>
	);

}

export default Header;
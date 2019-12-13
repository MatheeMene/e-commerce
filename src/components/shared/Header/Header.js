import React from 'react';
import { Link } from 'react-router-dom'
//STYLE
import './Header.css'
import Logo from '../../../assets/images/logo.png'

const Header = () => {
	
  return(
    <header className='navbar'>
			<ul className='nav-list-left'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
			</ul>
			<img className='logo' src={ Logo } alt='Logo' />
			<ul className='nav-list-right'>
				<li>
					<Link to="/naosei">Profile</Link>
				</li>
				<li>
					<Link to='/signup'>SignUp</Link>
				</li>
			</ul>
    </header>
	);

}

export default Header;
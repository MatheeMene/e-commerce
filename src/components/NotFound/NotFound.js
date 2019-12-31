import React from 'react';
import { Link } from 'react-router-dom';
//Bootstrap
import Image from 'react-bootstrap/Image';
//Style
import NotFoundImage from '../../assets/images/404.png';
import './NotFound.css'

const NotFound = () => (

	<section className="body-not-found">
		<h1 className="title-not-found">Page not found, <Link to="/" className="go-home">go home</Link></h1>
		<Image className="image-not-found" src={ NotFoundImage } fluid />
	</section>
);

export default NotFound;
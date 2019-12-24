import React    from 'react';
import { Link } from 'react-router-dom';
//STYLE
import 
{ AiFillInstagram,
  AiFillFacebook , 
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube
} from "react-icons/ai";
import './Footer.css'

const Footer = () => {

	return (
		<footer className="body-footer">
			<div className="footer-sections">
				<div className="first-section">
					<h2 className="first-title">Offers</h2>
					<p><Link to="/weekoffer">Week Offers</Link></p>
					<p>Alguma coisa</p>
				</div>
				<div className="second-section">
					<h2 className="second-title">About</h2>
					<p>Alguma coisa</p>
					<p>Alguma coisa</p>
				</div>
				<div className="third-section">
					<h2 className="third-title">Algo</h2>
					<p>Alguma coisa</p>
					<p>Alguma coisa</p>
				</div>
				<div className="last-section">
					<h2 className="last-title">Follow US</h2>
					<div className="follow-us">
						<p><AiFillInstagram /></p>
						<p><AiFillFacebook /></p>
						<p><AiFillTwitterSquare /></p>
						<p><AiFillLinkedin /></p>
						<p><AiFillYoutube /></p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
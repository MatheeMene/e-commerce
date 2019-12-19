import React from 'react';
import { Link } from 'react-router-dom';
//STYLE
import './ChooseService.css';

const ChooseService = () => {

	return (

		<div>
			<section className="body-product">
				<Link to="/algo" className="add-week-offers">
					Add product to week offers
				</Link>
				<Link to="/addproduct" className="add-all-products">
					Add to all products
				</Link>
				<Link to="/aiai" className="see-all-products">
					See all products
				</Link>
				<Link to="/weekoffer" className="see-week-offers">
					See week offers
				</Link>
			</section>
		</div>

	);

}

export default ChooseService;
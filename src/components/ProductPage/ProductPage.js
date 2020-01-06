import React, { useState, useEffect } from 'react';
import Axios from '../../Axios';
//Bootstrap
import Image from 'react-bootstrap/Image';
import Form  from 'react-bootstrap/Form';
//Styles
import './ProductPage.css';
import NumberFormat               from 'react-number-format';
import { AiOutlineShoppingCart }  from "react-icons/ai";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductPage = props => {

	const { match }  = props;
	const { params } = match; 

	const  [ details, setDetails ] = useState({});

	const listOption = details => {

		let options = [];

		for(let i = 1; i <= details.quantity; i ++) {
			options.push(<option key={ i }>{ i }</option>);
		}

		return options;
	};

	const fetchData = async () => {
		
		try {

			let { data } = await Axios.post(`http://localhost:4000/product/${ params.id }`, {});
			setDetails(data[0]);

		} catch (err) {
			console.log(err);
		}

	};

	useEffect(() => {

		fetchData();
	}, []);

	return (
		
		<section className="body-pdp">
			<div className="product-desc">
				<Image className="product-image" 
					src={ details.image_url } 
					thumbnail 
				/>

				<div className="info-product">
					<h2 className="title">{ details.title }</h2>

					<span className="avaliacao">
						<IoMdStar /> 
						<IoMdStar />
						<IoMdStar /> 
						<IoMdStar />
						<IoMdStarHalf /> (64)
					</span>

					<p className="description">{ details.description }</p>

					<Form.Group className="quantity">
						<Form.Label>Quantity:</Form.Label>
						<Form.Control as="select">
							{
								listOption(details)
							}
						</Form.Control>
					</Form.Group>

					<NumberFormat className="price" value={ details.price } displayType={ 'text' } thousandSeparator={ true } prefix={ '$ ' } />

					<button className="buy">Add Cart <AiOutlineShoppingCart className="icon-button" /></button>
				</div>

			</div>
		</section>
	);
}

export default ProductPage;
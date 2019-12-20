import React, { useState, useEffect } from 'react';
import Axios from '../../Axios';

//Components
import ProductCard from '../shared/ProductCard/ProductCard';

import './WeekOffer.css'

const WeekOffer = () => {

	const [ weekProducts, setWeekProducts ] = useState([]);

	const fetchData = async () => {

		try {

			let { data } = await Axios.get(`/weekoffer`, {});
			setWeekProducts(data)

		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {

		fetchData();
    }, []);
	
	return (

		<section className="week-offers">
			<h2 className="title-ofertas">
				<span style={{ borderTop: '3px solid #000' }}>
					We
				</span>
				ek Offe
				<span style={{ borderBottom: '3px solid #000' }}>
					rs
				</span>
			</h2>

			<ProductCard data={ weekProducts }/>
			
		</section>
	);
}

export default WeekOffer;
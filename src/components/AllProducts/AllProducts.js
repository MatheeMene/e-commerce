import React, { useState, useEffect } from 'react';
import Axios from '../../Axios';
//Styles
import './AllProducts.css';
//Components
import ProductCard from '../shared/ProductCard/ProductCard'

const AllProducts = () => {

    const [ products, getProducts ] = useState([]);

    const fetchData = async () => {

		try {

			let { data } = await Axios.get(`/allproducts`, {});
			getProducts(data)

		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {

		fetchData();
    }, []);

    return (
        <section>
            <h2 className="title-all-products">
				<span style={{ borderTop: '3px solid #000' }}>
					Al  
				</span>
				 l Produc
				<span style={{ borderBottom: '3px solid #000' }}>
					ts
				</span>
			</h2>

			<ProductCard data={ products }/>

        </section>
    );
}

export default AllProducts;
import React, { useState, useEffect } from 'react';
import Axios from '../../Axios';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//Styles
import './WeekOffer.css'

const WeekOffer = () => {

	const [weekProducts, setWeekProducts] = useState([]);

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
					Ofe
				</span>
				rtas da Sem
				<span style={{ borderBottom: '3px solid #000' }}>
					ana
				</span>
			</h2>

			<Container>
				<Row>
					{
						weekProducts.map(prod => {
							return <Col key={ prod.id } md={ 4 }>
								<Card style={{ width: '19.8rem' }} className="card-style">
									<Card.Img variant="top" src={ prod.image_url } />
									<Card.Body className="card-body">
										<Card.Title className="product-title">
											{ prod.title }
										</Card.Title>
										<Card.Text>
											<span> { prod.price} </span>
										</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						})
					}
				</Row>
			</Container>
		</section>
	);

}

export default WeekOffer;
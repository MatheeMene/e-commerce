import React, { useState, useEffect } from 'react';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//Styles
import './WeekOffer.css'

const WeekOffer = () => {

	const [ weekProducts, getWeekProducts ] = useState({});

	useEffect(() => {
		
		fetch('http://localhost:4000/weekoffer', {
			headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
		})
			.then(response => response.json())
			.then(data => getWeekProducts)

			console.log(weekProducts);
			

	}, []);

	return (

		<section className="week-offers">
			<h2 className="title-ofertas">
				<span style={{ borderTop: '3px solid #000' }}>Ofe</span>rtas da Sem<span style={{ borderBottom: '3px solid #000' }}>ana</span>
			</h2>

			<Container>
				<Row>
					<Col md={ 4 }>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="" />
							<Card.Body>
								<Card.Title>
									Minhau
								</Card.Title>
								<Card.Text>
									OI
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>

		</section>
	);

}

export default WeekOffer;
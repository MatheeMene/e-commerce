import React from 'react';
//BOOTSTRAP
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//STYLES
import FirstImage from '../../assets/images/Carousel_1.jpg';
import SecondImage from '../../assets/images/Carousel_2.jpg';
import './Home.css';

const Home = () => {

	return (

		<div>
			<section>
				<Carousel>

					<Carousel.Item>
						<img
							className="carousel-image"
							src={ SecondImage }
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>Black products? É black december</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="carousel-image"
							src={ FirstImage }
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>

				</Carousel>
			</section>

			<section className="week-offers">
				<h2 className="title-ofertas">
					<span style={{ borderTop: '3px solid #000' }}>Ofe</span>rtas da Sem<span style={{ borderBottom: '3px solid #000' }}>ana</span>
				</h2>

				<Container>
					<Row>
						<Col md={ 4 }>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="https://shopluxo.vteximg.com.br/arquivos/ids/203831-1000-1000/idole-lancome-perfume-feminino-eau-de-parfum-25ml.jpg?v=637038339015030000" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={ 4 }>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="https://shopluxo.vteximg.com.br/arquivos/ids/203831-1000-1000/idole-lancome-perfume-feminino-eau-de-parfum-25ml.jpg?v=637038339015030000" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={ 4 }>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src="https://shopluxo.vteximg.com.br/arquivos/ids/203831-1000-1000/idole-lancome-perfume-feminino-eau-de-parfum-25ml.jpg?v=637038339015030000" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>

			</section>

		</div>
	);

}

export default Home;
import React from 'react';
//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
//Styles
import FirstImage  from '../../assets/images/Carousel_1.jpg';
import SecondImage from '../../assets/images/Carousel_2.jpg';
import './Home.css';
//Components
import WeekOffer   from '../WeekOffer/WeekOffer';
import AllProducts from '../AllProducts/AllProducts';

const Home = () => (

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

		<WeekOffer />

		<AllProducts />

	</div>
);

export default Home;
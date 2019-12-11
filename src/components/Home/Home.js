import React from 'react';
//BOOTSTRAP
import Carousel from 'react-bootstrap/Carousel'
//STYLES
import FirstImage from '../../assets/images/Carousel_1.jpg'
import SecondImage from '../../assets/images/Carousel_2.jpg'
import './Home.css'

const Home = () => {

	return (

		<div>
			<section>
				<Carousel>

					<Carousel.Item>
						<img
							className="carousel-image"
							src={ SecondImage }
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h3>First slide</h3>
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

			<section>
				<h2 className="title-ofertas">
					<span style={{ borderTop: '3px solid #000' }}>Ofe</span>rtas da Sem<span style={{ borderBottom: '3px solid #000' }}>ana</span>
				</h2>
			</section>

		</div>
	);

}

export default Home;
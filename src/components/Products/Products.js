import React from 'react';
import { Link } from 'react-router-dom';
//BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//STYLE
import './Products.css';

const Products = () => {

	return (

			<section className="body-product">
				<Container>
					<Row>
						<Col xs={ 6 }>
							<button>Add product to week offers</button>
						</Col>
						<Col xs={ 6 }>
							<button>
								<Link to="/addproduct">Add to all Products</Link>
							</button>
						</Col>
					</Row>
					<Row>
						<Col xs={ 6 }>
							<button>See all Products</button>
						</Col>
						<Col xs={ 6 }>
							<button>oiamigosnseiainda</button>
						</Col>
					</Row>
				</Container>
			</section>

	);

}

export default Products;
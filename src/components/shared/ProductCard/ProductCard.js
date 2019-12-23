import React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom'
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//Styles
import { AiOutlineShoppingCart } from "react-icons/ai";
import './ProductCard.css'

const ProductCard = (props) => {

	return (
		<Container>
			<Row>
				{
					props.data.map(prod => {
						return <Col key={ prod.id } md={ 4 }>
							<Card style={{ width: '19.75rem' }} className="card-style">
								<Link to="/productpage" className="link-to-pdp">
									<Card.Img variant="top" src={ prod.image_url } />
									<Card.Body className="card-body">
										<Card.Title className="product-title">
											{ prod.title }
										</Card.Title>
										<Card.Text>
											<NumberFormat value={ `${ prod.price }.00` } displayType={ 'text' } thousandSeparator={ true } prefix={ '$' } />
										</Card.Text>
										<button className="buy-product">Add to Cart<AiOutlineShoppingCart className="icon-button" /></button>
									</Card.Body>
								</Link>
							</Card>
						</Col>
					})
				}
			</Row>
		</Container>
	);
}

export default ProductCard;
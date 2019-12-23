import React from 'react';
//Bootstrap
import Image from 'react-bootstrap/Image';
import Form  from 'react-bootstrap/Form'
//Styles
import './ProductPage.css';
import NumberFormat               from 'react-number-format';
import { AiOutlineShoppingCart }  from "react-icons/ai";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const ProductPage = () => {

	return (
		
		<section className="body-pdp">
			<div className="product-desc">
				<Image className="product-image" 
					src="https://lancome.vteximg.com.br/arquivos/ids/158506/Miracle.jpg?v=636481500859400000" 
					thumbnail 
				/>

				<div className="info-product">
					<h2 className="title">Perfume Miracle Lancôme</h2>

					<span className="avaliacao">
						<IoMdStar /> 
						<IoMdStar />
						<IoMdStar /> 
						<IoMdStar />
						<IoMdStarHalf /> (64)
					</span>

					<p className="description">
						Descrição de um perfume bom dms, mas é provisória pq daqui 
						a pouco vai fica dinâmica então vo saca fora essa descrição
						provisória mas que vai me ajudar muito a medir o espaço que 
						eu preciso pra ter noção de como vai ficar a página dps de add uma descrição dinamica braba
					</p>

					<Form.Group className="quantity">
						<Form.Label>Quantity:</Form.Label>
						<Form.Control as="select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>

					<NumberFormat className="price" value={ 899.99 } displayType={ 'text' } thousandSeparator={ true } prefix={ '$ ' } />

					<button className="buy">Buy product <AiOutlineShoppingCart className="icon-button" /></button>
				</div>

			</div>
		</section>
	);
}

export default ProductPage;
import React from 'react';
//Bootstrap
import Table from 'react-bootstrap/Table';
//Styles
import './Cart.css'

const Cart = () => {

	return (

		<section className="cart-body">

			<h1 className="cart-title">Meu carrinho</h1>
			<Table>
				<thead>
					<tr>
						<th className="item-description-th">Description</th>
						<th className="item-quantity-th">Quantity</th>
						<th className="item-price-th">Price</th>
						<th className="item-subtotal-th">Subtotal</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="item-description">Descrição de um produto debochado</td>
						<td className="item-quantity">Table cell</td>
						<td className="item-price">Table cell</td>
						<td className="item-subtotal">Table cell</td>
						<td className="item-delete">X</td>
					</tr>
					<tr>
						<td className="item-description">Descrição de um produto debochado</td>
						<td className="item-quantity">Table cell</td>
						<td className="item-price">Table cell</td>
						<td className="item-subtotal">Table cell</td>
						<td className="item-delete">X</td>
					</tr>
					<tr>
						<td className="item-description">Descrição de um produto debochado</td>
						<td className="item-quantity">Table cell</td>
						<td className="item-price">Table cell</td>
						<td className="item-subtotal">Table cell</td>
						<td className="item-delete">X</td>
					</tr>
				</tbody>
			</Table>

			
			<div className="tabela-envio">
				<Table>
					<thead>
						<tr>
							<td></td>
							<td>Envio</td>
							<td>Frete</td>
							<td>Prazo</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>RadioB</td>
							<td>PAC</td>
							<td>GRÁTIS</td>
							<td>8 Dias</td>
						</tr>
						<tr>
							<td>RadioB</td>
							<td>Retirar na loja</td>
							<td>GRÁTIS</td>
							<td>0 Dias</td>
						</tr>
						<tr>
							<td>RadioB</td>
							<td>Sedex</td>
							<td>R$ 10.00</td>
							<td>4 Dias</td>
						</tr>
					</tbody>
				</Table>
			</div>

			<div className="info-price">
				<p>Subtotal:</p>
				<p>Frete:</p>
				<p>Total:</p>
				<button className="btn-buy">Buy</button>
			</div>
		</section>
	);
}

export default Cart;
import React from 'react';
import Form from 'react-bootstrap/Form';
//STYLE
import './CreateProduct.css'
import useAddProductForm from '../../Hooks/useAddProductForm';

const CreateProduct = () => {

	const { inputs, handleInputChange, handleSubmit } = useAddProductForm();

	return (
		<section className="body-add-product">
			<h1 className="add-product-title">Add Product</h1>

			<Form>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Enter name of the product" name="title" onChange={ handleInputChange } value={ inputs.title } />
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control type="text" placeholder="Enter description" name="description" onChange={ handleInputChange } value={ inputs.description } />
				</Form.Group>
				<Form.Group>
					<Form.Label>Quantity</Form.Label>
					<Form.Control type="text" placeholder="Enter quantity" name="quantity" onChange={ handleInputChange } value={ inputs.quantity } />
				</Form.Group>
				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control type="text" placeholder="Enter the price of the product" name="price" onChange={ handleInputChange } value={ inputs.price } />
				</Form.Group>
				<Form.Group>
					<Form.Label>Image URL</Form.Label>
					<Form.Control type="text" placeholder="Enter URL" name="imageUrl" onChange={ handleInputChange } value={ inputs.imageUrl } />
				</Form.Group>
				<Form.Group>
					<Form.Label>Week Offer?</Form.Label>
					<Form.Control type="text" placeholder="Is a week offer? true or false" name="weekOffer" onChange={ handleInputChange } value={ inputs.weekOffer } />
				</Form.Group>

				<div className="banner-add-product">
				</div>

				<button className="button-add-product" onClick={ handleSubmit } >Adicionar produto</button>
				
			</Form>
		</section>
	);

}

export default CreateProduct;
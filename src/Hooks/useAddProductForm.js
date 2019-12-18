import { useState } from 'react';

const useAddProductForm = () => {
	const [inputs, setInputs] = useState({ title: '', description: '', quantity: '', price: '', imageUrl: '', weekOffer: 'false' });

	const handleSubmit = event => {
		if (event) {
			event.preventDefault();

			fetch('http://localhost:4000/createproduct', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},

				body: JSON.stringify({
					title: inputs.title,
					description: inputs.description,
					quantity: inputs.quantity,
					price: inputs.price,
					imageUrl: inputs.imageUrl,
					weekOffer: inputs.weekOffer,
				})
			});
		}
	}

	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
	}

	return {
		handleSubmit,
		handleInputChange,
		inputs
	};
}

export default useAddProductForm;
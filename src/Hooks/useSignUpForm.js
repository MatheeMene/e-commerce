import { useState } from 'react';

const useSignUpForm = () => {
	const [inputs, setInputs] = useState({ firstName: '', lastName: '', email: '', password: '', repeatPassword: '' });

	const handleSubmit = event => {
		event.preventDefault();
	
		fetch('http://localhost:4000/api/createuser', {
			method: 'POST',
			headers: {
				'Accept':       'application/json',
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				firstName:      inputs.firstName,
				lastName:       inputs.lastName,
				email:          inputs.email,
				password:       inputs.password,
				repeatPassword: inputs.repeatPassword
			})
		});
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

export default useSignUpForm;
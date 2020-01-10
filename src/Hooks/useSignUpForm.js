import { useState } from 'react';

const useSignUpForm = () => {
	const [inputs, setInputs] = useState({ firstName: '', lastName: '', email: '', password: '', repeatPassword: '' });

	const handleSubmit = event => {
		event.preventDefault();
		
		const actualDateFormated = () => {
			let data = new Date(),
				dia  = data.getDate().toString(),
				diaF = (dia.length === 1) ? '0' + dia : dia,
				mes  = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
				mesF = (mes.length === 1) ? '0' + mes : mes,
				anoF = data.getFullYear();
			return anoF + "/" + mesF + "/" + diaF;
		}
	
		fetch('http://localhost:4000/api/createuser', {
			method: 'POST',
			headers: {
				'Accept':       'application/json',
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				firstName:        inputs.firstName,
				lastName:         inputs.lastName,
				email:            inputs.email,
				password:         inputs.password,
				repeatPassword:   inputs.repeatPassword,
				registrationDate: actualDateFormated()
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
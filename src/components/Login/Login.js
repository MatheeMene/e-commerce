import React, { useState }     from 'react';
// import { Redirect }            from 'react-router-dom';
import { setToken } from '../../services/Authentic';
//Style
import './Login.css';
import Axios from 'axios';

const Login = () => {

	const [inputs, setInputs] = useState({ email: '', password: '' });

	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
	}

	const handleSubmit = async event => {
		event.preventDefault();

		let { data } = await Axios.post('http://localhost:4000/api/login', {
			email:    inputs.email,
			password: inputs.password
		});

		const { auth } = data;

		if(auth === true) {
			
			const { token } = data;
			setToken(token);
			console.log(token);

		} else {
			const { MSG } = data;
			console.log(MSG);
		}
	}

	return (

		<section className="login-body">
			<form onSubmit={ handleSubmit }>
				<div className="box-login">
					
					<h1 className="login-title">Login</h1>
					<hr className="login-hr" />

					<label>
						Email:
						<input className="field-input" type="text" name="email" onChange={ handleInputChange } />
					</label>
					<label>
						Password:
						<input className="field-input" type="text" name="password" onChange={ handleInputChange } />
					</label>

					<button className="login-button">Login</button>
				</div>
			</form>
		</section>
	);
}

export default Login;
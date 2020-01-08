import React, { useState } from 'react';
import { Link }            from 'react-router-dom';
import { setToken }        from '../../services/Authentic';
import Axios               from 'axios';
//Boostrap
import Spinner from 'react-bootstrap/Spinner';
//Style
import './Login.css';

const Login = props => {

	const [ inputs,  setInputs  ] = useState({ email: '', password: '' });
	const [ display, setDisplay ] = useState('none');
	const [ errMSG,  setErrMSG  ] = useState('');

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
			setDisplay('inline-block');

			setTimeout(() => {
				setDisplay('none');

				props.history.push('/');
				window.location.reload();
			}, 2000);
	
		} else {
			setDisplay('inline-block');
			setTimeout(() => {
				setDisplay('none')
				setErrMSG(data.MSG);
			}, 1500);
		}
	}

	return (

		<section className='login-body'>
			<form onSubmit={ handleSubmit }>
				<div className='box-login'>
					<h1 className='login-title'>Log<span style={{ borderBottom: '2px solid #000' }}>in</span></h1>
					<hr className='login-hr' />

					<div className='fields-login'>
						<label className='label-login'>
							Email:
							<input className='field-input' type='text' name='email' onChange={ handleInputChange } />
						</label>
						<label className='label-login'>
							Password:
							<input className='field-input' type='password' name='password' onChange={ handleInputChange } />
						</label>

						<span style={{ display: 'block', color: 'firebrick' }} >{ errMSG }</span>

						<button className='button-login'><Spinner className='spinner-login' animation="border" size='sm' variant="danger" style={{ display: display }} />Login</button>
						<p className='have-account'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
					</div>
				</div>
			</form>
		</section>
	);
}

export default Login;
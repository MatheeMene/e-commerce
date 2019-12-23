import React from 'react';
//Components
import useSignUpForm from '../../Hooks/useSignUpForm';
import './SignUp.css';
//Icons
import { AiOutlineArrowRight } from 'react-icons/ai';

const SignUp = () => {

	const signUp = () => {
		alert(`User Created!
     	Name: ${ inputs.firstName } ${ inputs.lastName }
    	Email: ${ inputs.email }`);
	}

	const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signUp);

	return (
		<div className="body-page">
			<div className="wallpaper-image">
			</div>
			<form className="form-box" onSubmit={ handleSubmit }>
				<h1 className="signup-title">Sign Up</h1>
				<div>
					<label>Nome</label>
					<input placeholder="Seu nome" className="input-field" type="text" name="firstName" onChange={ handleInputChange } value={ inputs.firstName } required />
				</div>
				<div>
					<label>Sobrenome</label>
					<input placeholder="Seu sobrenome" className="input-field" type="text" name="lastName" onChange={ handleInputChange } value={ inputs.lastName } required />
				</div>
				<div>
					<label>Email</label>
					<input placeholder="Seu email" className="input-field" type="email" name="email" onChange={ handleInputChange } value={ inputs.email } required />
				</div>
				<div>
					<label>Senha</label>
					<input placeholder="Sua senha" className="input-field" type="password" name="password" onChange={ handleInputChange } value={ inputs.password1 } />
				</div>
				<div>
					<label>Confirmar senha</label>
					<input placeholder="Confirme sua senha" className="input-field" type="password" name="repeatPassword" onChange={ handleInputChange } value={ inputs.password2 } />
				</div>
				<div className="login-box">
					<button className="submit-button" type="submit">Cadastrar</button>
					<span className="login-button">Entrar <AiOutlineArrowRight /></span>
				</div>
			</form>
		</div>
	);
}

export default SignUp;

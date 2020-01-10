import React, { useState, useEffect } from 'react';
import { getToken }         from '../../services/Authentic';
import Axios                from '../../Axios';
//Bootstrap
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Icons
import { 
	FaUserCircle,
	FaEnvelope,
	FaIdCard,
	FaCalendarAlt,
	FaLock,
	FaTransgenderAlt,
	FaUserEdit
} from 'react-icons/fa';
//Styles
import './Profile.css';

const Profile = () => {

	const [ profileData, setProfileData ]       = useState({});
	const [ toggleDisabled, setToggleDisabled ] = useState('disabled');
	const [ toggleButton, setToggleButton ]     = useState('Edit Profile');
	const [ inputs, setInputs ]                 = useState({ name: '', email: profileData.email, rg: '', gender: '', surname: profileData.last_name, bornDate: '', CPF: '', password: profileData.password });

	const actualDateFormated = () => {
		let data = new Date(profileData.registration_date),
			dia  = data.getDate().toString(),
			diaF = (dia.length === 1) ? '0' + dia : dia,
			mes  = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
			mesF = (mes.length === 1) ? '0' + mes : mes,
			anoF = data.getFullYear();
		return anoF + "/" + mesF + "/" + diaF;
	}
	
	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
	}
	
	const toggleField = () => {
		toggleDisabled === 'disabled' ? setToggleDisabled('') : setToggleDisabled('disabled');
		toggleButton === 'Edit Profile' ? setToggleButton('Save Changes') : setToggleButton('Edit Profile');
	}

	useEffect(() => {
		
		Axios.post('http://localhost:4000/api/profile', { token: getToken() })
		.then(response => setProfileData(response.data[0]));
		console.log();
		
	}, []);


	// { new Intl.DateTimeFormat("en-US", options).format(new Date(profileData.registration_date).toString())}
	
	return (
		<section className='profile-section'>

			<div className='picture-desc'>
				<Image className='profile-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnsQ-LiBqIzmTRpyK5Fh1FQ8fHjWuskDoJVUAMk_9vugOKQb9K" roundedCircle />
				<p className='profile-name'>{ profileData.name }</p>
				<p className="profile-date">Account created at: { actualDateFormated() }</p>
			</div>

			<div style={{ borderLeft: '.1rem solid #000', height: '28rem' }}></div>

			<div className='profile-data'>
				<Row>
					<Col style={{ paddingLeft: '8rem' }} className='left-column' md={ 6 }>
						<div>
							<FaUserCircle className='profile-icon'/>
							<label> Name:
								<input className='profile-field' type='text' name='name' onChange={ handleInputChange } disabled={ toggleDisabled } />
							</label>
						</div>
						<div>
							<FaEnvelope className='profile-icon'/>
							<label> Email:
								<input className='profile-field' type='text' name='email' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaIdCard className='profile-icon'/>
							<label> RG:
								<input className='profile-field' type='text' name='rg' onChange={ handleInputChange } disabled={ toggleDisabled } />
							</label>
						</div>
						<div>
							<FaTransgenderAlt className='profile-icon'/>
							<label> Gender:
								<select className='profile-field' name='gender' onChange={ handleInputChange } disabled={ toggleDisabled }>
									<option>--SELECT--</option>
									<option value='male'>Male</option>
									<option value='Female'>Female</option>
									<option value='other'>Other</option>
								</select>
							</label>
						</div>
					</Col>
					<Col className='right-column' md={ 6 }>
						<div>
							<FaUserCircle className='profile-icon'/>
							<label> Surname:
								<input className='profile-field' type='text' name='surname' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaCalendarAlt className='profile-icon'/>
							<label> Born Date:
								<input className='profile-field' type='text' name='bornDate' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaIdCard className='profile-icon'/>
							<label> CPF:
								<input className='profile-field' type='text' name='CPF' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaLock className='profile-icon'/>
							<label> Password:
								<input className='profile-field' type='password' name='password' onChange={ handleInputChange } disabled={ toggleDisabled } />
							</label>
						</div>
						<button className='edit-button-profile' name='buttonProfile' onClick={ () => toggleField() } ><FaUserEdit className='edit-profile-icon'/> { toggleButton }</button>
					</Col>
				</Row>
			</div>
		</section>
	);
}

export default Profile;
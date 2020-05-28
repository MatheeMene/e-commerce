import React, { useState, useEffect } from 'react';
import { getToken }         from '../../services/Authentic';
import Axios                from '../../Axios';
//Bootstrap
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { User } from '../../models/user'
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

	const [ profileData, setProfileData ]       = useState(new User());
	const [ toggleDisabled, setToggleDisabled ] = useState('disabled');
	const [ toggleButton, setToggleButton ]     = useState('Edit Profile');
	const [ inputs, setInputs ]                 = useState(profileData);

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
		Axios.get('http://localhost:4000/api/profile', { headers: {'x-access-token': getToken() }})
		.then(response => {
			let data = response.data[0];
			console.log(data);
			setProfileData(data);
			setInputs(data);
		});
	}, []);


	// { new Intl.DateTimeFormat("en-US", options).format(new Date(profileData.registration_date).toString())}
	
	return (
		<section className='profile-section'>
			<a href="#" className="profile-pic">	
				<div className="profile-pic" style={{backgroundImage: `url(https://sportbuzz.uol.com.br/media/_versions/gettyimages-1186649760_MvE2Vfu_widelg.jpg)`}} >
					<span>Alterar Foto</span>
				</div>
			</a>

			<div style={{ borderLeft: '.1rem solid #000', height: '28rem' }}></div>

			<div className='profile-data'>
				<Row>
					<Col style={{ paddingLeft: '8rem' }} className='left-column' md={ 6 }>
						<div>
							<FaUserCircle className='profile-icon'/>
							<label> Name:
								<input value={inputs.name} className='profile-field' type='text' name='name' onChange={ handleInputChange } disabled={ toggleDisabled } />
							</label>
						</div>
						<div>
							<FaEnvelope className='profile-icon'/>
							<label> Email:
								<input value={inputs.email} className='profile-field' type='text' name='email' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaIdCard className='profile-icon'/>
							<label> RG:
								<input value={inputs.rg} className='profile-field' type='text' name='rg' onChange={ handleInputChange } disabled={ toggleDisabled } />
							</label>
						</div>
						<div>
							<FaTransgenderAlt className='profile-icon'/>
							<label> Gender:
								<select value={inputs.gender} className='profile-field' name='gender' onChange={ handleInputChange } disabled={ toggleDisabled }>
									<option value="">--SELECT--</option>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
									<option value='other'>Other</option>
								</select>
							</label>
						</div>
					</Col>
					<Col className='right-column' md={ 6 }>
						<div>
							<FaUserCircle className='profile-icon'/>
							<label> Surname:
								<input value={inputs.last_name} className='profile-field' type='text' name='last_name' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaCalendarAlt className='profile-icon'/>
							<label> Born Date:
								<input value={inputs.born_date} className='profile-field' type='text' name='bornDate' onChange={ handleInputChange } disabled={ toggleDisabled }/>
							</label>
						</div>
						<div>
							<FaIdCard className='profile-icon'/>
							<label> CPF:
								<input value={inputs.cpf} className='profile-field' type='text' name='CPF' onChange={ handleInputChange } disabled={ toggleDisabled }/>
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
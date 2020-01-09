import React from 'react';
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
	FaTransgenderAlt
} from 'react-icons/fa';
//Styles
import './Profile.css';

const Profile = () => (
	<section className='profile-section'>

		<div className='picture-desc'>
			<Image className='profile-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnsQ-LiBqIzmTRpyK5Fh1FQ8fHjWuskDoJVUAMk_9vugOKQb9K" roundedCircle />
			<p className='profile-name'>MATHEUS MENEGAT</p>
			<p className="profile-date">Usuário desde: 02/12/2019</p>
		</div>

		<div style={{ borderLeft: '.1rem solid #000', height: '28rem', marginTop: '2rem' }}></div>

		<div className='profile-data'>
			<Row>
				<Col style={{ paddingLeft: '8rem' }} className='left-column' md={ 6 }>
					<div>
						<FaUserCircle className='profile-icon'/>
						<label> Name:
							<input className='profile-field' type='text' value='Matheus' disabled/>
						</label>
					</div>
					<div>
						<FaEnvelope className='profile-icon'/>
						<label> Email:
							<input className='profile-field' type='text' value='matheusmenegat@hotmail.com' disabled/>
						</label>
					</div>
					<div>
						<FaIdCard className='profile-icon'/>
						<label> RG:
							<input className='profile-field' type='text' value='4111767069' disabled />
						</label>
					</div>
					<div>
						<FaTransgenderAlt className='profile-icon'/>
						<label> Gender:
							<input className='profile-field' type='text' value='Male' disabled/>
						</label>
					</div>
				</Col>
				<Col className='right-column' md={ 6 }>
					<div>
						<FaUserCircle className='profile-icon'/>
						<label> Surname:
							<input className='profile-field' type='text' value='Menegat' disabled/>
						</label>
					</div>
					<div>
						<FaCalendarAlt className='profile-icon'/>
						<label> Born Date:
							<input className='profile-field' type='text' value='02/12/2019' disabled/>
						</label>
					</div>
					<div>
						<FaIdCard className='profile-icon'/>
						<label> CPF:
							<input className='profile-field' type='text' value='039.932.490-97' disabled/>
						</label>
					</div>
					<div>
						<FaLock className='profile-icon'/>
						<label> Password:
							<input className='profile-field' type='password' value='12345' disabled />
						</label>
					</div>
				</Col>
			</Row>
		</div>
	</section>
)

export default Profile;
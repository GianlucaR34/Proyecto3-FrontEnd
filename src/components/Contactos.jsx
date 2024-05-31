import { useState } from 'react';
import '../css/Contactos.css'; // Importamos el archivo de estilos CSS
import { APIProvider, Map, Marker, AdvancedMarker, useAdvancedMarkerRef, InfoWindow } from '@vis.gl/react-google-maps';
import { Container } from 'react-bootstrap';

const Contactos = () => {
	const direccionExacta = { lat: -26.837042, lng: -65.210010 }; // Coordenadas de la Torre Eiffel
	const [markerRef, marker] = useAdvancedMarkerRef();


	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		email: '',
		propuesta: '',
		telefono: '',
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formIsValid()) {
			// Aquí puedes manejar el envío del formulario
			console.log(formData);
			setFormData({
				nombre: '',
				apellido: '',
				email: '',
				propuesta: '',
				telefono: '',
			});
			setErrors({});
		}
	};

	const formIsValid = () => {
		const newErrors = {};
		if (!formData.nombre.trim()) {
			newErrors.nombre = 'El nombre es requerido';
		}
		if (!formData.apellido.trim()) {
			newErrors.apellido = 'El apellido es requerido';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'El email es requerido';
		} else if (!isValidEmail(formData.email)) {
			newErrors.email = 'Por favor, introduce un email válido';
		}
		if (!formData.propuesta.trim()) {
			newErrors.propuesta = 'La propuesta es requerida';
		}
		if (!formData.telefono.trim()) {
			newErrors.telefono = 'El teléfono es requerido';
		} else if (!isValidPhoneNumber(formData.telefono)) {
			newErrors.telefono = 'Por favor, introduce un número de teléfono válido';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	const mapOptions = {
		draggable: false
	}
	const isValidEmail = (email) => {
		// Una simple validación de email, puedes usar una expresión regular más robusta si lo prefieres
		return /\S+@\S+\.\S+/.test(email);
	};

	const isValidPhoneNumber = (phone) => {
		// Una simple validación de número de teléfono, puedes ajustarla según tus necesidades
		return /^\d{10}$/.test(phone);
	};

	return (
		<div className="contact-form-container">
			<div className="contact-form-wrapper">
				<form onSubmit={handleSubmit} className="contact-form">
					<div>
						<label htmlFor="nombre">Nombre:</label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
							required
						/>
						{errors.nombre && <span>{errors.nombre}</span>}
					</div>
					<div>
						<label htmlFor="apellido">Apellido:</label>
						<input
							type="text"
							id="apellido"
							name="apellido"
							value={formData.apellido}
							onChange={handleChange}
							required
						/>
						{errors.apellido && <span>{errors.apellido}</span>}
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
						{errors.email && <span>{errors.email}</span>}
					</div>
					<div>
						<label htmlFor="propuesta">Mensaje:</label>
						<textarea
							id="propuesta"
							name="propuesta"
							value={formData.propuesta}
							onChange={handleChange}
							required
						/>
						{errors.propuesta && <span>{errors.propuesta}</span>}
					</div>
					<div>
						<label htmlFor="telefono">Teléfono celular:</label>
						<input
							type="tel"
							id="telefono"
							name="telefono"
							value={formData.telefono}
							onChange={handleChange}
							required
						/>
						{errors.telefono && <span>{errors.telefono}</span>}
					</div>
					<button type="submit">CONSULTAR</button>
				</form>
			</div>
			<Container className=''>
				<APIProvider apiKey={"AIzaSyAXppTvrk8qqIHGpx8H6xqnC5T-wShozfs"}>
					<Map
						style={{ width: '50vw', height: '70vh' }}
						defaultCenter={direccionExacta}
						defaultZoom={17}
						gestureHandling={'greedy'}
						disableDefaultUI={false}
						options={mapOptions}
					/>
					<Marker position={direccionExacta} />
					{/* <InfoWindow anchor={marker}>Infowindow Content</InfoWindow> */}
				</APIProvider>
			</Container>
		</div>
	);
};

export default Contactos
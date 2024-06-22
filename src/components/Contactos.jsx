
import React, { useState } from 'react';
import Modal from './Modal';
import MapContainer from './MapContainer';
import '../css/Contactos.css';

function Contactos() {
	const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		email: '',
		telefono: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('https://formspree.io/f/xzbnqlwq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Formulario enviado exitosamente');
				setShowModal(true); // Mostrar el modal en caso de que el envío sea exitoso
				resetForm(); // Limpiar los campos del formulario después de enviarlo
			}
		} catch (error) {
			console.error('Error al enviar el formulario:', error);
		}
	};

	const resetForm = () => {
		setFormData({
			nombre: '',
			apellido: '',
			email: '',
			telefono: '',
			message: '',
		});
	};

	const closeModal = () => {
		console.log('Cerrando el modal');
		setShowModal(false); // Función para cerrar el modal
		resetForm(); // Limpiar los campos del formulario al cerrar el modal
	};

	return (
		<div className="contact-page">
			<div className="content-container">
				<form onSubmit={handleSubmit} className="contact-form">
					<div>
						<label htmlFor="nombre">Nombre:</label>
						<input
							id="nombre"
							type="text"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="apellido">Apellido:</label>
						<input
							id="apellido"
							type="text"
							name="apellido"
							value={formData.apellido}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							id="email"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="telefono">Teléfono:</label>
						<input
							id="telefono"
							type="tel"
							name="telefono"
							value={formData.telefono}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="message">Mensaje:</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit">Enviar</button>
				</form>
				<div className="map-container">
					<MapContainer />
				</div>
			</div>
			{/* Mostrar el modal s showModal es true */}
			{showModal && <Modal onClose={closeModal} />}
		</div>
	);
}

export default Contactos;

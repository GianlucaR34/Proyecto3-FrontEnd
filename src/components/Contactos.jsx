import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contactos.css'; // Importamos el archivo de estilos CSS
import { APIProvider, Map, Marker, AdvancedMarker, useAdvancedMarkerRef, InfoWindow } from '@vis.gl/react-google-maps';
import { Container } from 'react-bootstrap';

function ContactForm() {
	const [state, handleSubmit] = useForm('xzbnqlwq');
	if (state.succeeded) {
		return <p>¡Gracias por contactarnos!</p>;
	}
	return (
		<form
			action="https://formspree.io/f/xzbnqlwq"
			method="POST"
			className="contact-form"
		>
			<div>
				<label htmlFor="nombre">Nombre:</label>
				<input id="nombre" type="text" name="nombre" required />
			</div>
			<div>
				<label htmlFor="apellido">Apellido:</label>
				<input id="apellido" type="text" name="apellido" required />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input id="email" type="email" name="email" required />
				<ValidationError prefix="Email" field="email" errors={state.errors} />
			</div>
			<div>
				<label htmlFor="telefono">Teléfono:</label>
				<input id="telefono" type="tel" name="telefono" required />
				<ValidationError prefix="Teléfono" field="telefono" errors={state.errors} />
			</div>
			<div>
				<label htmlFor="message">Mensaje:</label>
				<textarea id="message" name="message" required />
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>
			<button type="submit" disabled={state.submitting}>
				Enviar
			</button>
		</form>
	);
}

export default ContactForm;

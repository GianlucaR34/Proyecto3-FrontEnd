import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import hotelAPI from '../api/hotelAPI';
import '../css/Registro.css';
import registro from '../assets/registro2.png';
const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');

	// nuevos para nombre apellido y dni
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [dni, setDni] = useState('');

	const [nombreError, setNombreError] = useState('');
	const [apellidoError, setApellidoError] = useState('');
	const [dniError, setDniError] = useState('');

	// apellido nombre y dni

	const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

	// apellido nombre y dni
	const handleNombreChange = (e) => {
		setNombre(e.target.value);
		if (!e.target.value) {
			setNombreError('El nombre es requerido');
		} else {
			setNombreError('');
		}
	};

	const handleApellidoChange = (e) => {
		setApellido(e.target.value);
		if (!e.target.value) {
			setApellidoError('El apellido es requerido');
		} else {
			setApellidoError('');
		}
	};

	const handleDniChange = (e) => {
		setDni(e.target.value);
		if (!e.target.value) {
			setDniError('El DNI es requerido');
		} else if (!/^\d{8}$/.test(e.target.value)) {
			setDniError('El DNI debe tener 8 dígitos');
		} else {
			setDniError('');
		}
	};
	// apellido nombre y dni

	const handleEmailChange = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail);
		if (!emailRegex.test(newEmail)) {
			setEmailError('El correo electrónico no es válido.');
		} else {
			setEmailError('');
		}
	};

	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		if (!passwordRegex.test(newPassword)) {
			setPasswordError(
				'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.'
			);
		} else {
			setPasswordError('');
		}
	};

	const handleConfirmPasswordChange = (e) => {
		const newConfirmPassword = e.target.value;
		setConfirmPassword(newConfirmPassword);
		if (newConfirmPassword !== password) {
			setConfirmPasswordError('Las contraseñas no coinciden.');
		} else {
			setConfirmPasswordError('');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			emailError ||
			passwordError ||
			confirmPasswordError ||
			nombreError ||
			apellidoError ||
			dniError
		) {
			handleMessage('Los campos no pueden estar vacios', 'error');
		}
		if (confirmPasswordError) return handleMessage(confirmPasswordError, 'error');
		if (passwordError) return handleMessage(passwordError, 'error');
		if (emailError) return handleMessage(emailError, 'error');
		if (nombreError) return handleMessage(emailError, 'error');
		if (apellidoError) return handleMessage(emailError, 'error');
		if (dniError) return handleMessage(emailError, 'error');
		//consumo API para el registro de usuario
		try {
			const resp = await hotelAPI.post('/user/createUser', {
				mail: email,
				password: password,
			});

			handleMessage(resp.data.msg, resp.data.type);
			return location.replace('/login');
		} catch (error) {
			handleMessage(error.response.data.msg, error.response.data.type);
		} finally {
			setNombre('');
			setApellido('');
			setDni('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		}
	};

	const handleMessage = (msg, type) => {
		Swal.fire({
			icon: type,
			text: msg,
		});
	};

	return (
		<div className="d-flex justify-content-center mt-5">
			<div className="img1 	">
				<img src={registro} alt="" className="imagenformulario" />
			</div>
			<div className="formulario">
				<h1 className="text-center mb-5 reg">¡Crea una nueva cuenta!</h1>
				<Form className="container mt-3" onSubmit={handleSubmit} style={{}}>
					<Form.Group controlId="formNombre" className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="Introduce tu nombre"
							value={nombre}
							onChange={handleNombreChange}
							isInvalid={!!nombreError}
						/>
						<Form.Control.Feedback type="invalid">
							{nombreError}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formApellido" className="mb-3">
						<Form.Label>Apellido</Form.Label>
						<Form.Control
							type="text"
							placeholder="Introduce tu apellido"
							value={apellido}
							onChange={handleApellidoChange}
							isInvalid={!!apellidoError}
						/>
						<Form.Control.Feedback type="invalid">
							{apellidoError}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formDNI" className="mb-3">
						<Form.Label>DNI</Form.Label>
						<Form.Control
							type="text"
							placeholder="Introduce tu DNI"
							value={dni}
							onChange={handleDniChange}
							isInvalid={!!dniError}
						/>
						<Form.Control.Feedback type="invalid">{dniError}</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formEmail" className="mb-3">
						<Form.Label>Correo electrónico</Form.Label>
						<Form.Control
							type="email"
							placeholder="Introduce tu correo"
							value={email}
							onChange={handleEmailChange}
							isInvalid={!!emailError}
						/>
						{emailError && (
							<Form.Control.Feedback type="invalid">
								{emailError}
							</Form.Control.Feedback>
						)}
					</Form.Group>

					<Form.Group controlId="formPassword" className="mb-3">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type="password"
							placeholder="Introduce tu contraseña"
							value={password}
							onChange={handlePasswordChange}
							isInvalid={!!passwordError}
						/>
						{passwordError && (
							<Form.Control.Feedback type="invalid">
								{passwordError}
							</Form.Control.Feedback>
						)}
					</Form.Group>

					<Form.Group controlId="formConfirmPassword" className="mb-3">
						<Form.Label>Repite tu contraseña</Form.Label>
						<Form.Control
							type="password"
							placeholder="Repite tu contraseña"
							value={confirmPassword}
							onChange={handleConfirmPasswordChange}
							isInvalid={!!confirmPasswordError}
						/>
						{confirmPasswordError && (
							<Form.Control.Feedback type="invalid">
								{confirmPasswordError}
							</Form.Control.Feedback>
						)}
					</Form.Group>

					<button
						className="text-center mt-3 botonReg "
						variant="primary"
						type="submit"
						disabled={
							!!emailError ||
							!!passwordError ||
							!!confirmPasswordError ||
							!!nombreError ||
							!!apellidoError ||
							!!dniError
						}
					>
						Registrarse
					</button>
				</Form>
			</div>
		</div>
	);
};

export default RegisterForm;

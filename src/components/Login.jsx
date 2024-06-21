import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import '../css/login.css';
import hotelAPI from '../api/hotelAPI';
import Swal from 'sweetalert2';
import login from '../assets/login.png';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();
		loginBackend(email, password);
	};

	const loginBackend = async (email, password) => {
		try {
			setIsSubmitting(true);
			const resp = await hotelAPI.post('/user/loginUser', {
				mail: email,
				password: password,
			});


			handleMessage(resp.data.msg, resp.data.type);
			const token = resp.data.token;
			localStorage.setItem('TokenJWT', token);
			resp.data.isAdmin
				? localStorage.setItem('isAdmin', resp.data.isAdmin)
				: localStorage.setItem('isAdmin', resp.data.isAdmin);
			return location.replace('/');
		} catch (error) {
			setIsSubmitting(false);
			handleMessage(error.response.data.msg, error.response.data.type);
			setEmail('');
			setPassword('');
			setErrors(error);
			return;
		}
	};
	const handleMessage = (msg, type) => {
		Swal.fire({
			icon: type,
			text: msg,
		});
	};


	return (
		<div className="d-flex mt-5 justify-content-center divMayor">
			<div className=" text-center imgdiv">
				<img src={login} alt="" className="imglogin" />
			</div>
			<div className="login">
				<h1 className="text-center mb-5 bienve">¡Bienvenido de vuelta!</h1>

				<Form className="container mt-3" onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail" className="mb-3">
						<Form.Label>Correo Electrónico</Form.Label>
						<Form.Control
							type="email"
							placeholder="Introduce tu correo"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							isInvalid={!!errors.email}
							disabled={isSubmitting}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.email}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formBasicPassword" className="mb-3">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type="password"
							placeholder="Introduce contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							isInvalid={!errors.password}
							disabled={isSubmitting}
						/>
						<Form.Control.Feedback type="invalid">
							{errors.password}
						</Form.Control.Feedback>
					</Form.Group>

					<button
						className="mt-3 mb-3 botonlogin "
						variant="primary"
						type="submit"
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<Spinner animation="border" size="sm" />
						) : (
							'Iniciar Sesión'
						)}
					</button>
				</Form>
				{Object.keys(errors).length > 0 && (
					<Alert variant="danger" className="mt-3">
						Correo electrónico o contraseña incorrecto, inténtalo de nuevo.
					</Alert>
				)}
			</div>
		</div>

	);
};

export default Login;

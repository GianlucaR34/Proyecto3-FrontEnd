import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

import '../css/login.css';

import hotelAPI from '../api/hotelAPI';
import Swal from 'sweetalert2';

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
		<Container className="w-50 d-flex p-5 container-login">
			<Row className="align-items-center justify-content-center w-100">
				<Col md={6} className="m-auto">
					<h2 className="text-center">Iniciar Sesión</h2>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								isInvalid={!!errors.email}
								disabled={isSubmitting}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.email}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								isInvalid={!errors.password}
								disabled={isSubmitting}
							/>
							<Form.Control.Feedback type="invalid">
								{errors.password}
							</Form.Control.Feedback>
						</Form.Group>

						<Button
							className="mt-3"
							variant="primary"
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<Spinner animation="border" size="sm" />
							) : (
								'Iniciar Sesión'
							)}
						</Button>
					</Form>
					{Object.keys(errors).length > 0 && (
						<Alert variant="danger" className="mt-3">
							Por favor, corrige los errores en el formulario.
						</Alert>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

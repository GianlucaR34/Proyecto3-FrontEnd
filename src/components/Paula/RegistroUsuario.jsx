import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

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
      setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError || confirmPasswordError) {
      return;
    }
    console.log({ email, password });
  };

  return (
    <Form className='container mt-3' onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Introduce tu correo"
          value={email}
          onChange={handleEmailChange}
          isInvalid={!!emailError}
          required
        />
        {emailError && (
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={!!passwordError}
          required
        />
        {passwordError && (
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Repite tu contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repite tu contraseña"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          isInvalid={!!confirmPasswordError}
          required
        />
        {confirmPasswordError && (
          <Form.Control.Feedback type="invalid">
            {confirmPasswordError}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button className='mt-3' variant="primary" type="submit" disabled={!!emailError || !!passwordError || !!confirmPasswordError}>
        Registrarse
      </Button>
    </Form>
  );
};

export default RegisterForm;

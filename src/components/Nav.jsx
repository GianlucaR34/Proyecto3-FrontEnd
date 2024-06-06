import React, { useEffect, useState } from 'react';
import '../css/Nav.css';
import Logo from '../assets/GoldenLux.png';
import '@fortawesome/fontawesome-free/css/all.css';
import { NavLink } from "react-router-dom";
import hotelAPI from '../api/hotelAPI';
import { isValid } from 'date-fns';

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false); // variable de estado para determinar si esta expandido o no el toggle menu
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Variable de estado para controlar si el usuario está autenticado
	const [isAdmin, setIsAdmin] = useState(false); // Variable de estado para controlar si el usuario es administrador

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleLogout = () => {
		// borrar datos del localStorage
		localStorage.removeItem('TokenJWT');
		localStorage.removeItem('isAdmin');
		setIsLoggedIn(false)
		// Actualizar estados
		// setIsLoggedIn(false);
		// setIsAdmin(false);
		// Redirigir al usuario a la página de inicio si todo sale bien y diosito quiere
		window.location.href = '/';
	};

	// Comprobar el estado de autenticación al cargar la página
	useEffect(() => {
		const isLogged = localStorage.getItem('TokenJWT')
		if (isLogged) {
			setIsLoggedIn(true)
		}
		if (isLoggedIn) {

			const checkTokenValidity = async () => {
				const isValidTokenRequest = await hotelAPI.get('/user/isValidToken')
				const isValidToken = isValidTokenRequest.data
				console.log(isValidToken)
				if (!isValidToken) {
					// console.log(isValidToken)

					handleLogout()
				}
			}
			checkTokenValidity();

			// Comprobación periódica del token cada 5 minutos
			const intervalId = setInterval(checkTokenValidity, 60000);

			// Limpieza del temporizador cuando el componente se desmonta
			return () => clearInterval(intervalId);
		}
	}, []);

	return (
		<div className="NavContainer">
			<div className="NavIcon">
				<img src={Logo} alt="Golden Lux Icon" />
			</div>

			{/* Botón de hamburguesa visible en dispositivos móviles */}
			<div className="menu-icon" onClick={toggleMenu}>
				<i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
			</div>

			{/* Menú de navegación */}
			<nav className={`Navbar ${isOpen ? 'active' : ''}`}>
				<ol className="NavList">
					<li>
						<NavLink className='text-decoration-none text-white' to='/'>INICIO</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/contact'>CONTACTO</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/reserves'>RESERVA</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/galery'>GALERIA</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/about'>QUIENES SOMOS</NavLink>
					</li>
					{isLoggedIn &&
						isAdmin && ( // Mostrar solo si el usuario está logeado y es administeador
							<li>
								<NavLink className='text-decoration-none text-white' to='/panel-admin'>ADMINISTRACION</NavLink>
							</li>
						)}
					{isLoggedIn ? (
						<li>
							<NavLink className='text-decoration-none text-white' to='/' onClick={handleLogout}>CERRAR SESIÓN</NavLink>
						</li>
					) : (
						<React.Fragment>
							<li>
								<NavLink className='text-decoration-none text-white' to='/register'>REGISTRO</NavLink>
							</li>
							<li>
								<NavLink className='text-decoration-none text-white' to='/login'>INICIAR SESIÓN</NavLink>
							</li>
						</React.Fragment>
					)}
				</ol>
			</nav>
		</div>
	);
};

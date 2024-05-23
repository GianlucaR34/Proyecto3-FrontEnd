import React, { useEffect, useState } from 'react';
import '../../css/Gianluca/Nav.css';
import Logo from '../../assets/Gianluca/GoldenLux.png';
// import '@fortawesome/fontawesome-free/css/all.css';
import { NavLink } from "react-router-dom";


export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false); // variable de estado para determinar si esta expandido o no el toggle menu
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Variable de estado para controlar si el usuario está autenticado
	const [isAdmin, setIsAdmin] = useState(false); // Variable de estado para controlar si el usuario es administrador

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleLogout = () => {
		// borrar datos del localStorage
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('isAdmin');
		// Actualizar estados
		setIsLoggedIn(false);
		setIsAdmin(false);
		// Redirigir al usuario a la página de inicio si todo sale bien y diosito quiere
		window.location.href = '/';
	};
	const handleLogin = () => {
		// Simular login de usuario administrador
		setIsLoggedIn(true);
		setIsAdmin(true);
		// Guardar estado de autenticación en localStorage
		localStorage.setItem('isLoggedIn', 'true');
		localStorage.setItem('isAdmin', 'true');
	};
	// Comprobar el estado de autenticación al cargar la página
	useEffect(() => {
		const loggedIn = localStorage.getItem('isLoggedIn');
		const admin = localStorage.getItem('isAdmin');
		if (loggedIn && admin) {
		setIsLoggedIn(true);
		setIsAdmin(true);
		}
	}, []);	
		

	return (
		<div className="NavContainer mb-5">
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
						<NavLink className='text-decoration-none text-white' to='/'>HOME</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/contact'>CONTACTO</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/404'>RESERVA</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/galery'>GALERIA</NavLink>
					</li>
					<li>
						<NavLink className='text-decoration-none text-white' to='/about'>QUIENES SOMOS</NavLink>
					</li>
					{isLoggedIn &&
						isAdmin&&( // Mostrar solo si el usuario está logeado y es administeador
							<li>
								<NavLink className='text-decoration-none text-white' to='/404'>ADMINISTRACION</NavLink>
							</li>
						)}
					{isLoggedIn ? (
						<li>
							<a href="#" onClick={handleLogout}>
								LOG OUT
							</a>
						</li>
						) : (
						<React.Fragment>
							<li>
								<a href="">REGISTRO</a>
							</li>
							<li>
								<a href="#" onClick={handleLogin}>
									LOG IN
								</a>
							</li>
						</React.Fragment>
						)}
				</ol>
			</nav>
		</div>
	);
};

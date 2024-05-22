import React, { useState } from 'react';
import '../../css/Gianluca/Nav.css';
import Logo from '../../assets/Gianluca/GoldenLux.png';
// import '@fortawesome/fontawesome-free/css/all.css';
import { NavLink } from "react-router-dom";

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false); // variable de estado para determinar si esta expandido o no el toggle menu
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Variable de estado para controlar si el usuario está autenticado
	const [isAdmin, setIsAdmin] = useState(false); // Variable de estado para controlar si el usuario es administrador

	// prueba para saber como se comporta el nav segun el usuario que este registrado
	const loginAsAdmin = () => {
		setIsLoggedIn(true);
		setIsAdmin(true);
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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
						<NavLink to='/'>HOME</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>CONTACTO</NavLink>
					</li>
					<li>
						<NavLink to='/404'>RESERVA</NavLink>
					</li>
					<li>
						<NavLink to='/galery'>GALERIA</NavLink>
					</li>
					<li>
						<NavLink to='/about'>QUIENES SOMOS</NavLink>
					</li>
					{isLoggedIn &&
						isAdmin && ( // Mostrar solo si el usuario está logeado y es administeador
							<li>
								<NavLink to='/404'>ADMINISTRACION</NavLink>
							</li>
						)}
					{!isLoggedIn && ( // Mostrar solo si el usuario no está logeado
						<React.Fragment>
							<li>
								<NavLink to='/register'>REGISTRO</NavLink>
							</li>
							<li>
								<NavLink to='/login' onClick={loginAsAdmin}>
									LOG IN
								</NavLink>{' '}
								{/* Simular login de usuario administrador */}
							</li>
						</React.Fragment>
					)}
				</ol>
			</nav>
		</div>
	);
};

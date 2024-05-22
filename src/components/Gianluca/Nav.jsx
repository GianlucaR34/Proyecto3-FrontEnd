import React, { useState } from 'react';
import '../../css/Gianluca/Nav.css';
import Logo from '../../assets/Gianluca/GoldenLux.png';
// import '@fortawesome/fontawesome-free/css/all.css';

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
						<a href="">HOME</a>
					</li>
					<li>
						<a href="">CONTACTO</a>
					</li>
					<li>
						<a href="">RESERVA</a>
					</li>
					<li>
						<a href="">GALERIA</a>
					</li>
					<li>
						<a href="">QUIENES SOMOS</a>
					</li>
					{isLoggedIn &&
						isAdmin && ( // Mostrar solo si el usuario está logeado y es administeador
							<li>
								<a href="">ADMINISTRACION</a>
							</li>
						)}
					{!isLoggedIn && ( // Mostrar solo si el usuario no está logeado
						<React.Fragment>
							<li>
								<a href="">REGISTRO</a>
							</li>
							<li>
								<a href="" onClick={loginAsAdmin}>
									LOG IN
								</a>{' '}
								{/* Simular login de usuario administrador */}
							</li>
						</React.Fragment>
					)}
				</ol>
			</nav>
		</div>
	);
};

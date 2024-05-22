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
		localStorage.getItem('isAdmin') ? setIsAdmin(true) : setIsAdmin(false)
		localStorage.getItem('TokenJWT') ? setIsLoggedIn(true):setIsLoggedIn(false)
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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
					{!isLoggedIn && ( // Mostrar solo si el usuario no está logeado
						<React.Fragment>
							<li>
								<NavLink className='text-decoration-none text-white' to='/register'>REGISTRO</NavLink>
							</li>
							<li>
								<NavLink className='text-decoration-none text-white' to='/login' onClick={loginAsAdmin}>
									{isLoggedIn ? 'LOG OUT' : 'LOG IN'}
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
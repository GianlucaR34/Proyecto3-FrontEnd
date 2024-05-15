import React from 'react';
import './css/Nav.css';
import Logo from '../src/assets/GoldenLux.png';

export const Nav = () => {
	return (
		<div className="NavContainer">
			<div className="NavIcon">
				<img src={Logo} alt="Golden Lux Icon" />
			</div>
			<nav className="Navbar">
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
					<li>
						<a href="">ADMINISTRACION</a>
					</li>
					<li>
						<a href="">REGISTRO</a>
					</li>
					<li>
						<a href="">LOG IN</a>
					</li>
				</ol>
			</nav>
		</div>
	);
};

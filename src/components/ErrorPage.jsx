// import React from 'react'
import '../css/ErrorPage.css';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div id="oopss">
			<div id="error-text">
				<img
					src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
					alt="404"
				/>
				<span>404 PAGE</span>
				<p className="p-a">. No se encontro la pagina que buscas</p>
				<p className="p-b">... Por favor vuelve a la pagina principal</p>
				<NavLink to="/" className="back">
					Volver a la pagina principal
				</NavLink>
			</div>
		</div>
	);
};

export default ErrorPage;


import React from 'react';
import '../css/ErrorPage.css';

const PaginaError = () => {
	return (
		<div className="pagina-error">
			<div className="imagen-fondo"></div>
			<div className="contenido">
				<h1>No pudimos encontrar la página que buscabas</h1>
				<button onClick={() => (window.location.href = '/')}>
					Regresar a la página principal
				</button>

			</div>
		</div>
	);
};


export default PaginaError;


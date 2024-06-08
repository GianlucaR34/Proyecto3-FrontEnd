import React from 'react';
import '../css/ModalForm.css';

const Modal = ({ onClose }) => {
	return (
		<div className="modal-overlay">
			<div className="modalForm">
				<p>Su formulario fue enviado con éxito</p>
				<button onClick={onClose}>Cerrar</button>
			</div>
		</div>
	);
};

export default Modal;

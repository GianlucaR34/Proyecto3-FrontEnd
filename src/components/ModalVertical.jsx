import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import '../css/modal.css';

function ModalVertical(props) {
	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className="modal"
		>
			<Modal.Header closeButton className="titulomodal">
				<Modal.Title id="contained-modal-title-vcenter ">{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="bodymodal">
				<p>{props.description}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalVertical;

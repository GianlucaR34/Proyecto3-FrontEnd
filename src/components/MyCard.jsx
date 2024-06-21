// import React from 'react';

import { Card, Button } from 'react-bootstrap';
import '../css/MyCard.css';
import React, { useState } from 'react';
import ModalVertical from './ModalVertical';

const MyCard = ({ imageSrc, title, modalTitle, description }) => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<Card className="my-card">
			<div className="image-container">
				<Card.Img
					src={imageSrc}
					alt={title}
					className="card-image"
					style={{ width: '100%', height: 'auto', backgroundSize: 'cover' }}
				/>
			</div>

			<Card.Body className=" bodycard ">
				<Card.Title className="titulo text-white ">{title}</Card.Title>

				<button className="buttonCard" onClick={handleShowModal}>
					Ver Más
				</button>
			</Card.Body>
			<ModalVertical
				show={showModal}
				onHide={handleCloseModal}
				title={modalTitle}
				description={description}
			/>
		</Card>
	);
};

export default MyCard;

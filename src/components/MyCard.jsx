// import React from 'react';

import { Card, Button, Modal, Carousel, Image } from 'react-bootstrap';
import '../css/MyCard.css';
import { useState } from 'react';
import Carrusel from './Carrusel';

const MyCard = ({ imageSrc, title, modalTitle, description, src1, src2, src3 }) => {
	const [showModal, setShowModal] = useState(false);

	const handleShow = () => setShowModal(true);
	const handleClose = () => setShowModal(false);

	return (
		<>
			<Card className="btn rounded p-0 text-black my-3 h-100" onClick={handleShow}>
				<Card.Body className="text-center" style={{
					backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover',
					backgroundPosition: 'center',
					borderRadius: 5,
					padding: 0
				}}>
					<div className='h-100 cardBodyInner'>
						<Card.Title className="cardTitle cardo-bold">{title}</Card.Title>
					</div>
				</Card.Body>
			</Card>

			<Modal
				show={showModal}
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				className="full-width-modal"

			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='d-block'>
					<p>{description}</p>
					<Carousel fade controls={false} indicators={false}>
						<Carousel.Item>
							<Image src={src1} text="First slide" />
						</Carousel.Item>
						<Carousel.Item>
							<Image src={src2} text="Second slide" />
						</Carousel.Item>
						<Carousel.Item>
							<Image src={src3} text="Third slide" />
						</Carousel.Item>
					</Carousel>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default MyCard;

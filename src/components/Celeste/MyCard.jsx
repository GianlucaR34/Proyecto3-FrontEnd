// import React from 'react';
import { Card } from 'react-bootstrap';
import '../../css/Celeste/MyCard.css';

const MyCard = ({ imageSrc, title }) => {
	return (
		<Card className="my-card">
			<div className="image-container">
				<Card.Img src={imageSrc} alt={title} className="card-image" />
			</div>

			<Card.Body className=" titulo1 ">
				<Card.Title className="titulo text-white ">{title}</Card.Title>
				<button className="buttonCard">Ver Más</button>
			</Card.Body>
		</Card>
	);
};

export default MyCard;

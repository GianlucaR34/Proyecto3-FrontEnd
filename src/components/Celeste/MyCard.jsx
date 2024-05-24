// import React from 'react';
import { Card } from 'react-bootstrap';
import '../../css/Celeste/MyCard.css';
import { Link } from 'react-router-dom';
const MyCard = ({ imageSrc, title }) => {
	return (
		<Card className="my-card">
			<div className="image-container">
				<Card.Img src={imageSrc} alt={title} className="card-image" />
			</div>

			<Card.Body className=" titulo1 ">
				<Card.Title className="titulo text-white ">{title}</Card.Title>
				<Link to="/404">
					<button className="buttonCard">Ver Más</button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default MyCard;

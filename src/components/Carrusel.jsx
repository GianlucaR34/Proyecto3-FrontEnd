import { Card, Carousel, Col, Image, Row } from 'react-bootstrap';

import '../css/testimonio.css';
import retrato1 from '../assets/retrato1.jpg';
import retrato2 from '../assets/retrato2.jpg';
import retrato3 from '../assets/retrato3.jpg';
import retrato4 from '../assets/retrato4.jpg';
import retrato5 from '../assets/retrato5.jpg';
import retrato6 from '../assets/retrato6.jpg';
import cinco from '../assets/cinco.png';
import cuatro from '../assets/cuatro.png';
import cuatroymedia from '../assets/cuatroymedia.png';

const Carrusel = () => {
	return (
		<Carousel fade controls={false} indicators={false}>
			<Carousel.Item>
				<div className="d-flex container justify-content-between w-100">
					<Card className='cardContainer'>
						<Card.Body className='rounded cardBody'>
							<Row xs={12} md={4} className='p-3'>
								<Col xs={12} md={4}>
									<Image src={retrato1} alt="Testimonio 1" className="img-fluid" />
								</Col>
								<Col xs={12} md={8} className='px-1 d-flex flex-column testimonioHeader' >
									<Image src={cinco} alt="quality stars" className="img-fluid" />
									<p className="name0 p-0 m-0">Sofía Pérez</p>
								</Col>
							</Row>
							<p className="message0 d-none d-xxl-block">
								"Mi estadía en Golden Lux fue mágica. El lujo y el servicio impecable
								hicieron de mi viaje una experiencia inolvidable. Recomiendo este
								paraíso."
							</p>
						</Card.Body>
					</Card>
					<Card className='cardContainer'>
						<Card.Body className='rounded cardBody'>
							<Row xs={12} md={4} className='p-3'>
								<Col xs={12} md={4}>
									<Image src={retrato2} alt="Testimonio 2" className="img-fluid" />
								</Col>
								<Col xs={12} md={8} className='px-1 d-flex flex-column testimonioHeader' >
									<Image src={cinco} alt="quality stars" className="img-fluid p-1" />
									<p className="name0 p-0 m-0">Lucía Gómez</p>
								</Col>
							</Row>
							<p className="message0 d-none d-xxl-block">
								"Golden Lux es un sueño hecho realidad. Cada momento, desde la
								entrada hasta el dormir, fue perfecto. Volveré, sin duda, a este
								oasis de confort."
							</p>
						</Card.Body>
					</Card>
					<Card className='cardContainer'>
						<Card.Body className='rounded cardBody'>
							<Row xs={12} md={4} className='p-3'>
								<Col xs={12} md={4}>
									<Image src={retrato3} alt="Testimonio 1" className="img-fluid" />
								</Col>
								<Col xs={12} md={8} className='px-1 d-flex flex-column testimonioHeader' >
									<Image src={cuatroymedia} alt="quality stars" className="img-fluid p-1" />
									<p className="name0 p-0 m-0">Santiago Rodríguez</p>
								</Col>
							</Row>
							<p className="message0 d-none d-xxl-block">
								"En Golden Lux encontré el equilibrio perfecto entre elegancia y
								comodidad. El personal es excepcional, las instalaciones, simplemente
								divinas."
							</p>
						</Card.Body>
					</Card>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="d-flex container justify-content-between w-100">
					<Card className='cardContainer'>
						<Card.Body className='rounded cardBody'>
							<Row xs={12} md={4} className='p-3'>
								<Col xs={12} md={4}>
									<Image src={retrato4} alt="Testimonio 1" className="img-fluid" />
								</Col>
								<Col xs={12} md={8} className='px-1 d-flex flex-column testimonioHeader' >
									<Image src={cinco} alt="quality stars" className="img-fluid p-1" />
									<p className="name0 p-0 m-0">Valentina Martínez</p>
								</Col>
							</Row>
							<p className="message0 d-none d-xxl-block">
								"El esplendor de Golden Lux es indescriptible. Cada detalle, desde la
								decoración hasta la gastronomía, me dejó sin palabras. ¡Un lugar
								sublime!"
							</p>
						</Card.Body>
					</Card>
					<Card className='cardContainer'>
						<Card.Body className='rounded cardBody'>
							<Row xs={12} md={4} className='p-3'>
								<Col xs={12} md={4}>
									<Image src={retrato5} alt="Testimonio 2" className="img-fluid" />
								</Col>
								<Col xs={12} md={8} className='px-1 d-flex flex-column testimonioHeader' >
									<Image src={cinco} alt="quality stars" className="img-fluid p-1" />
									<p className="name0 p-0 m-0">Julia Ponce De León</p>
								</Col>
							</Row>
							<p className="message0 d-none d-xxl-block">
								"En Golden Lux, el tiempo se detiene. Cada instante fue como un
								sueño. No puedo esperar para regresar a este refugio de lujo y
								tranquilidad."
							</p>
						</Card.Body>
					</Card>
					<Card className='cardContainer'>
						<Card.Body className='rounded cardBody'>
							<Row xs={12} md={4} className='p-3'>
								<Col xs={12} md={4}>
									<Image src={retrato6} alt="Testimonio 1" className="img-fluid" />
								</Col>
								<Col xs={12} md={8} className='px-1 d-flex flex-column testimonioHeader' >
									<Image src={cuatroymedia} alt="quality stars" className="img-fluid p-1" />
									<p className="name0 p-0 m-0">Anabella Paulí</p>
								</Col>
							</Row>
							<p className="message0 d-none d-xxl-block">
								"Mi estancia en Golden Lux fue la definición del paraíso terrenal. La
								elegancia, el servicio y la atención a los detalles son
								incomparables. ¡Una experiencia única!"
							</p>
						</Card.Body>
					</Card>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};

export default Carrusel;

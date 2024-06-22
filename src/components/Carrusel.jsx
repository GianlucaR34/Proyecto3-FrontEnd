import { Carousel } from 'react-bootstrap';

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
				<div className="d-flex container justify-content-around">
					<div>
						<div className="card0">
							<div className="header0">
								{' '}
								<img src={retrato1} alt="Testimonio 1" className="image0" />
								<div className="header1">
									<img src={cinco} alt="" className="estrellas" width={120} />
									<p className="name0">Sofía Pérez</p>
								</div>
							</div>

							<p className="message0">
								"Mi estadía en Golden Lux fue mágica. El lujo y el servicio impecable
								hicieron de mi viaje una experiencia inolvidable. Recomiendo este
								paraíso."
							</p>
						</div>
					</div>
					<div>
						<div className="card0">
							<div className="header0">
								{' '}
								<img src={retrato2} alt="Testimonio 1" className="image0" />
								<div>
									<img src={cinco} alt="" className="estrellas" width={120} />
									<p className="name0">Lucía Gómez</p>
								</div>
							</div>

							<p className="message0">
								"Golden Lux es un sueño hecho realidad. Cada momento, desde la
								entrada hasta el dormir, fue perfecto. Volveré, sin duda, a este
								oasis de confort."
							</p>
						</div>
					</div>
					<div>
						<div className="card0">
							<div className="header0">
								{' '}
								<img src={retrato3} alt="Testimonio 1" className="image0" />
								<div>
									<img src={cuatroymedia} alt="" className="estrellas" width={120} />
									<p className="name0">Santiago Rodríguez</p>
								</div>
							</div>

							<p className="message0">
								"En Golden Lux encontré el equilibrio perfecto entre elegancia y
								comodidad. El personal es excepcional, las instalaciones, simplemente
								divinas."
							</p>
						</div>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className="d-flex container justify-content-around">
					<div>
						<div className="card0">
							<div className="header0">
								{' '}
								<img src={retrato4} alt="Testimonio 1" className="image0" />
								<div>
									<img src={cuatroymedia} alt="" className="estrellas" width={120} />
									<p className="name0">Valentina Martínez</p>
								</div>
							</div>

							<p className="message0">
								"El esplendor de Golden Lux es indescriptible. Cada detalle, desde la
								decoración hasta la gastronomía, me dejó sin palabras. ¡Un lugar
								sublime!"
							</p>
						</div>
					</div>
					<div>
						<div className="card0">
							<div className="header0">
								{' '}
								<img src={retrato5} alt="Testimonio 1" className="image0" />
								<div>
									<img src={cuatro} alt="" className="estrellas" width={120} />
									<p className="name0">Julia Ponce De León</p>
								</div>
							</div>
							<p className="message0">
								"En Golden Lux, el tiempo se detiene. Cada instante fue como un
								sueño. No puedo esperar para regresar a este refugio de lujo y
								tranquilidad."
							</p>
						</div>
					</div>
					<div>
						<div className="card0">
							<div className="header0">
								{' '}
								<img src={retrato6} alt="Testimonio 1" className="image0" />
								<div>
									<img src={cinco} alt="" className="estrellas" width={120} />
									<p className="name0">Anabella Paulí</p>
								</div>
							</div>

							<p className="message0">
								"Mi estancia en Golden Lux fue la definición del paraíso terrenal. La
								elegancia, el servicio y la atención a los detalles son
								incomparables. ¡Una experiencia única!"
							</p>
						</div>
					</div>
				</div>

			</Carousel.Item>
		</Carousel>
	);
};

export default Carrusel;

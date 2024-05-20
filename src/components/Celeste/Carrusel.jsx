import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carrusel = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="w-25"
					src="src\assets\Celeste\img\1(3).png"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" w-25"
					src="src\assets\Celeste\img\2(3).png"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" w-25"
					src="src\assets\Celeste\img\3(3).png"
					alt="First slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Carrusel;

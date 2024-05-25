
import { Carousel } from 'react-bootstrap';
import fig1 from "../assets/1(3).png"
import fig2 from "../assets/2(3).png"
import fig3 from "../assets/3(3).png"







const Carrusel = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="w-25"
					src={fig1}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" w-25"
					src={fig2}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" w-25"
					src={fig3}
					alt="First slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Carrusel;

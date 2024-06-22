import React, { useState } from 'react';
import '../css/home.css';
import Carrusel from './Carrusel';
import { Link } from 'react-router-dom';

import MyCard from './MyCard';
import fotopalacio1 from '../assets/Staying at the Palacio Duhau _ Travelgal Nicole.jfif';
import estadia from '../assets/Estadia SVG/estadia-hotel-bar.svg';
import estadia1 from '../assets/Estadia SVG/estadia-hotel-gym.svg';
import estadia2 from '../assets/Estadia SVG/estadia-hotel-patio.svg';
import estadia3 from '../assets/Estadia SVG/estadia-hotel-restroom.svg';
import spa from '../assets/SPA SVG/recreational-facility-svg.svg';
import spa1 from '../assets/SPA SVG/recreational-facility-jacuzzi-svg.svg';
import spa2 from '../assets/SPA SVG/recreational-facility-massage-svg.svg';
import spa3 from '../assets/SPA SVG/recreational-facility-piedras-svg.svg';
import eventos from '../assets/Eventos SVG/evento-sala-1.svg';
import eventos1 from '../assets/Eventos SVG/evento-sala-2.svg';
import eventos2 from '../assets/Eventos SVG/evento-sala-3.svg';
import eventos3 from '../assets/Eventos SVG/evento-sala-4.svg';
import gastronomia from '../assets/Rest & Bar SVG/resto-1.svg';
import gastronomia1 from '../assets/Rest & Bar SVG/resto-2.svg';
import gastronomia2 from '../assets/Rest & Bar SVG/resto-3.svg';
import gastronomia3 from '../assets/Rest & Bar SVG/resto-4.svg';
import { Col, Row } from 'react-bootstrap';
const Home = () => {

	return (
		<div>
			<div className="bienvenida text-center">
				<div className="titulo">
					<h3 className="text-light palacio1 ">Bienvenido a </h3>
					<h1 className="text-light palacio">GoldenLux</h1>
					<h1 className="text-light palacio">Park Hyatt Buenos Aires</h1>
				</div>
			</div>

			<div className="seccionUno">
				<h2 className="descubra text-center cardo-bold">Descubra experiencias memorables</h2>
				<div className="d-flex justify-content-center divM">
					<div className="fotopalacio">
						<img src={fotopalacio1} alt="" width={400} />
					</div>
					<div className=" texto1 ">
						<h3 className="parrafo1">
							Disfrute de un lujoso edificio histórico con elegantes suites en Buenos
							Aires
						</h3>

						<br />
						<p className="parrafo">
							GoldenLux - Park Hyatt Buenos Aires es un hotel de lujo ubicado en el
							tradicional barrio de Recoleta. El complejo de dos edificios combina la
							elegancia de un palacio aristocrático con un sofisticado diseño
							contemporáneo. Disfrute la experiencia de una estadía residencial en
							amplias habitaciones y suites, explore la alta gastronomía argentina de
							la mano de talentosos chefs; contemple una curada colección privada de
							arte; relájese en el mejor spa de Buenos Aires y deléitese con
							experiencias memorables en inspiradores jardines.
						</p>
					</div>
				</div>
			</div>

			<Row md={12} className='px-5'>
				<Col md={6} style={{ height: '80vh' }} className='mb-3'>
					<MyCard
						title="ESTADÍA"
						imageSrc={estadia}
						src1={estadia1}
						src2={estadia2}
						src3={estadia3}
						modalTitle="Estadías"
						description="Nuestros paquetes de estadía son una invitación a crear nuevos recuerdos compartidos, experimentando la hospitalidad, la alta gastronomía y el arte de la atención al detalle de Park Hyatt."
					/>
				</Col>
				<Col md={6} style={{ height: '80vh' }} className='mb-3'>
					<MyCard
						title="SPA"
						imageSrc={spa}
						src1={spa1}
						src2={spa2}
						src3={spa3}
						modalTitle="Ahín Wellness & Spa"
						description="Ahín significa “Ceremonia o Ritual de Bienvenida que se ofrece para honrar a un huésped”, según la lengua mapuche.
					Para una experiencia de verdadero placer, Park Hyatt Buenos Aires le da la bienvenida a Ahín Wellness & Spa, con una combinación de tratamientos, rituales y ceremonias basados ​​en los conocimientos ancestrales de esta milenaria cultura."
					/>
				</Col>
				<Col md={6} style={{ height: '80vh' }} className='mb-3'>
					<MyCard
						title="EVENTOS"
						imageSrc={eventos}
						src1={eventos1}
						src2={eventos2}
						src3={eventos3}
						modalTitle="Eventos"
						description="Todas las semanas, música en vivo y experiencias gastronómicas en nuestros restaurantes. Cena con Enólogos, Five O'Clock Tea, Martes Botánicos, Viernes de Jazz y mucho más."
					/>
				</Col>
				<Col md={6} style={{ height: '80vh' }} className='mb-3'>
					<MyCard
						title="GASTRONOMÍA"
						imageSrc={gastronomia}
						src1={gastronomia1}
						src2={gastronomia2}
						src3={gastronomia3}
						modalTitle="Restaurantes & Bar"
						description="Encuentre propuestas gastronómicas deliciosas en nuestros sofisticados ambientes junto a un excelente servicio."
					/>
				</Col>
			</Row>

			<div className="text-center testimonios h-100">
				<h2 className="fs-1 clientes mb-3 ">Lo que dicen nuestros clientes</h2>

				<div className="text-center ">
					<p className="mb-5 valoramos">
						Valoramos enormemente las relaciones sólidas y hemos visto los beneficios
						que nos aportan. La retroalimentacion de los clientes es vital para
						ayudarnos a hacerlo bien.
					</p>
				</div>

				<Carrusel />
			</div>
		</div>
	);
};

export default Home;

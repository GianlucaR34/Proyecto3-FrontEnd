import React, { useState } from 'react';
import '../css/home.css';
import Carrusel from './Carrusel';
import { Link } from 'react-router-dom';
import MyCard from './MyCard';
const Home = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = (type) => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<div className="bienvenida text-center">
				<div className="titulo">
					<h3 className="text-light palacio1 ">Bienvenido a </h3>
					<h1 className="text-light palacio">GoldenLux</h1>
					<h1 className="text-light palacio">Park Hyatt Buenos Aires</h1>
				</div>
			</div>
			<img
				src="src\assets\Dise-C3-B1o+sin+t-C3-ADtulo+-283-29-3d6934d1-1920w.png"
				alt=""
				className="w-100 "
			/>
			<div className="">
				<h2 className="descubra  text-center">Descubra expereciencias memorables</h2>
				<div className="d-flex justify-content-center ">
					<div className="fotopalacio">
						<img
							src="src\assets\Staying at the Palacio Duhau _ Travelgal Nicole.jfif"
							alt=""
							width={400}
						/>
					</div>
					<div className=" texto1 ms-5">
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
							amplias habitaciones y suites; explore la alta gastronomía argentina de
							la mano de talentosos chefs; contemple una curada colección privada de
							arte; relájese en el mejor spa de Buenos Aires y deléitese con
							experiencias memorables en inspiradores jardines.
						</p>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className="d-flex justify-content-around palacio3">
				<MyCard
					title="ESTADÍA"
					imageSrc="src\assets\Estadía.jpg"
					modalTitle="Estadías"
					description="Nuestros paquetes de estadía son una invitación a crear nuevos recuerdos compartidos, experimentando la hospitalidad, la alta gastronomía y el arte de la atención al detalle de Park Hyatt."
				/>
				<MyCard
					title="SPA"
					imageSrc="src\assets\Spa.jpg"
					modalTitle="AhínWellness & Spa"
					description="Ahín significa “Ceremonia o Ritual de Bienvenida que se ofrece para honrar a un huésped”, según la lengua mapuche.
					Para una experiencia de verdadero placer, Park Hyatt Buenos Aires le da la bienvenida a Ahín Wellness & Spa, con una combinación de tratamientos, rituales y ceremonias basados ​​en los conocimientos ancestrales de esta milenaria cultura."
				/>
				<MyCard
					title="EVENTOS"
					imageSrc="src\assets\Eventos.jpg"
					modalTitle="Eventos"
					description="Todas las semanas, música en vivo y experiencias gastronómicas en nuestros restaurantes. Cena con Enólogos, Five O'Clock Tea, Martes Botánicos, Viernes de Jazz y mucho más."
				/>
				<MyCard
					title="GASTRONOMÍA"
					imageSrc="src\assets\Gastronomía.jpg"
					modalTitle="Restaurantes & Bar"
					description="Encuentre propuestas gastronómicas deliciosas en nuestros sofisticados ambientes junto a un excelente servicio."
				/>
			</div>

			<br />
			<br />
			<br />
			<br />

			<img
				src="src\assets\Dise-C3-B1o+sin+t-C3-ADtulo+-283-29-3d6934d1-1920w.png"
				alt=""
				className="w-100 "
			/>

			<div className="text-center testimonios mt-5">
				<h2 className="mb-5">Testimonios</h2>

				<Carrusel />
			</div>
		</div>
	);
};

export default Home;

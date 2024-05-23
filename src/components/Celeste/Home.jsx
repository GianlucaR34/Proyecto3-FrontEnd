import '../../css/Celeste/home.css';
import MyCard from './MyCard';
import Carrusel from './Carrusel';

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
			<img
				src="src\assets\Celeste\img\Dise-C3-B1o+sin+t-C3-ADtulo+-283-29-3d6934d1-1920w.png"
				alt=""
				className="w-100 "
			/>
			<div className="">
				<h2 className="descubra  text-center">Descubra expereciencias memorables</h2>
				<div className="d-flex justify-content-center ">
					<div className="fotopalacio">
						<img
							src="src\assets\Celeste\img\Staying at the Palacio Duhau _ Travelgal Nicole.jfif"
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
						<button className="botonConozca">CONOZCA EL HOTEL</button>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className="d-flex justify-content-around palacio3">
				<MyCard imageSrc="src\assets\Celeste\img\foto1.png" title="ESTADÍA" />
				<MyCard imageSrc="src\assets\Celeste\img\foto2.png" title="SPA" />
				<MyCard imageSrc="src\assets\Celeste\img\foto3.png" title="EVENTOS " />
				<MyCard imageSrc="src\assets\Celeste\img\foto4.png" title="GASTRONOMÍA" />
			</div>

			<br />
			<br />
			<br />
			<br />

			<div className="d-flex flex-column justify-content-center align-items-center  ">
				<img src="src\assets\Celeste\img\SPAA2.png" alt="" className="fotoSpa" />
				<button className="conozca mt-4">CONOZCA LA PROPUESTA</button>
			</div>

			<img
				src="src\assets\Celeste\img\Dise-C3-B1o+sin+t-C3-ADtulo+-283-29-3d6934d1-1920w.png"
				alt=""
				className="w-100 "
			/>
			<div className="text-center testimonios mt-5">
				<h2>Testimonios</h2>
				<Carrusel />
			</div>
		</div>
	);
};

export default Home;

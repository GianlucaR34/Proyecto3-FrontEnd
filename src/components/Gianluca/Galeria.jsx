// import './css/Galeria.css';
import HotelPicBanner from '../../assets/Gianluca/imagen de prueba.jpg';
/*imagenes de cuartos*/
import RoomPic1 from '../../assets/Gianluca/1.jpg';
import RoomPic2 from '../../assets/Gianluca/2.jpg';
import RoomPic3 from '../../assets/Gianluca/3.jpg';
import RoomPic4 from '../../assets/Gianluca/4.jpg';
import RoomPic5 from '../../assets/Gianluca/5.jpg';
import RoomPic6 from '../../assets/Gianluca/6.jpg';
import RoomPic7 from '../../assets/Gianluca/7.jpg';
import RoomPic8 from '../../assets/Gianluca/8.jpg';
import RoomPic9 from '../../assets/Gianluca/9.jpg';

const Galeria = () => {
	return (
		<div className="Galeria">
			<div className="Galeria-header">
				<div className="header-overlay">
					<h1 className="title">GALERÍA</h1>
				</div>
				<img src={HotelPicBanner} alt="Imagen Principal" className="main-image" />
			</div>
			<div className="image-grid">
				<div className="column">
					<img src={RoomPic1} alt="Imagen Chica 1" className="small-image" />
					<img src={RoomPic2} alt="Imagen Grande 1" className="big-image" />
					<img src={RoomPic3} alt="Imagen Chica 4" className="small-image" />
				</div>
				<div className="column">
					<img src={RoomPic4} alt="Imagen Grande 2" className="big-image" />
					<img src={RoomPic5} alt="Imagen Chica 2" className="small-image" />
					<img src={RoomPic6} alt="Imagen Grande 4" className="big-image" />
				</div>
				<div className="column">
					<img src={RoomPic7} alt="Imagen Chica 3" className="small-image" />
					<img src={RoomPic8} alt="Imagen Grande 3" className="big-image" />
					<img src={RoomPic9} alt="Imagen Chica 5" className="small-image" />
				</div>
			</div>
		</div>
	);
};

export default Galeria
import '../css/admin.css';
import Habitaciones from './Habitaciones';
import Usuarios from './Usuarios';

const AdminPanel = () => {
	return (
		<div>
			<div className="tituloAdmin">
				<h1 className="titulo">Administración de Hotel</h1>
			</div>
			<br />
			<h2 className="text-center subtitulos">Usuarios</h2>
			<Usuarios />
			<br />
			<br />
			<h2 className="text-center subtitulos">Habitaciones</h2>
			<br />
			<Habitaciones />
		</div>
	);
};

export default AdminPanel;

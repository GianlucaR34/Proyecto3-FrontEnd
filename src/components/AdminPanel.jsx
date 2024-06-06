import { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import '../css/admin.css';

const UserTable = ({ users }) => {
	const [showModifyModal, setShowModifyModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showViewModal, setShowViewModal] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [showAddModal, setShowAddModal] = useState(false);

	const handleModifyUser = (user) => {
		setSelectedUser(user);
		setShowModifyModal(true);
	};

	const handleCloseModifyModal = () => {
		setShowModifyModal(false);
		setSelectedUser(null);
	};

	const handleAddUser = () => {
		setShowAddModal(true);
	};

	const handleCloseAddModal = () => {
		setShowAddModal(false);
		setUserData({
			name: '',
			email: '',
		});
	};

	const handleSubmitAddUser = (e) => {
		e.preventDefault();
		const newUser = {
			id: users.length ? users[users.length - 1].id + 1 : 1,
			...userData,
		};
		setUsers([...users, newUser]);
		handleCloseAddModal();
	};

	const handleDeleteUser = (user) => {
		setSelectedUser(user);
		setShowDeleteModal(true);
	};

	const handleCloseDeleteModal = () => {
		setShowDeleteModal(false);
		setSelectedUser(null);
	};

	const handleViewUser = (user) => {
		setSelectedUser(user);
		setShowViewModal(true);
	};

	const handleCloseViewModal = () => {
		setShowViewModal(false);
		setSelectedUser(null);
	};
	const [userData, setUserData] = useState({
		name: '',
		email: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Datos modificados:', userData);
		setShowModifyModal(false);
		setSelectedUser(null);
	};
	return (
		<div>
			<button className="botonAgregarU" onClick={handleAddUser}>
				Agregar Usuario
			</button>
			<br />
			<br />
			<Table striped bordered hover className="tabla">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Email</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								<button className="botones" onClick={() => handleModifyUser(user)}>
									Modificar
								</button>
								<button className="botones" onClick={() => handleDeleteUser(user)}>
									Eliminar
								</button>
								<button className="botones" onClick={() => handleViewUser(user)}>
									Ver
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal show={showAddModal} onHide={handleCloseAddModal}>
				<Modal.Header closeButton>
					<Modal.Title>Agregar Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmitAddUser}>
						<Form.Group controlId="formName">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={userData.name}
								onChange={handleInputChange}
							/>
						</Form.Group>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={userData.email}
								onChange={handleInputChange}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Agregar Usuario
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseAddModal}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showModifyModal} onHide={handleCloseModifyModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modificar Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formName">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={userData.name}
								onChange={handleInputChange}
							/>
						</Form.Group>
						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={userData.email}
								onChange={handleInputChange}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Guardar Cambios
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModifyModal}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
			{/* <Modal show={showModifyModal} onHide={handleCloseModifyModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modificar Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{selectedUser && (
						<div>
							<p>Nombre: {selectedUser.name}</p>
							<p>Email: {selectedUser.email}</p>
							
						</div>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModifyModal}>
						Cerrar
					</Button>
					<Button variant="primary" onClick={handleCloseModifyModal}>
						Guardar Cambios
					</Button>
				</Modal.Footer>
			</Modal> */}

			<Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
				<Modal.Header closeButton>
					<Modal.Title>Eliminar Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{selectedUser && (
						<div>
							<p>
								¿Estás seguro de que quieres eliminar al usuario {selectedUser.name}?
							</p>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseDeleteModal}>
						Cancelar
					</Button>
					<Button variant="danger" onClick={handleCloseDeleteModal}>
						Eliminar
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showViewModal} onHide={handleCloseViewModal}>
				<Modal.Header closeButton>
					<Modal.Title>Ver Usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{selectedUser && (
						<div>
							<p>Nombre: {selectedUser.name}</p>
							<p>Email: {selectedUser.email}</p>
							{/* Agregar más campos de usuario aquí para ver */}
						</div>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseViewModal}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

const RoomTable = ({ rooms }) => {
	return (
		<Table striped bordered hover className="tabla">
			<thead>
				<tr>
					<th>Número</th>
					<th>Tipo</th>
					<th>Precio</th>
					<th>Disponibilidad</th>
					<th>Foto</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{rooms.map((room) => (
					<tr key={room.id}>
						<td>{room.number}</td>
						<td>{room.type}</td>
						<td>{room.price}</td>
						<td>{room.availability}</td>
						<td>{room.photo}</td>
						<td>
							<button className="botones">Modificar</button>
							<button className="botones">Eliminar</button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

const AdminPanel = () => {
	const users = [
		{ id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
		{ id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
	];

	const rooms = [
		{
			id: 1,
			number: 101,
			type: 'Individual',
			price: '$100',
			availability: 'Disponible',
			photo: 'imagen1.jpg',
		},
		{
			id: 2,
			number: 102,
			type: 'Doble',
			price: '$150',
			availability: 'No disponible',
			photo: 'imagen2.jpg',
		},
	];

	return (
		<div>
			<div className="tituloAdmin">
				<h1 className="titulo">Administración de Hotel</h1>
			</div>
			<br />
			<h2 className="text-center subtitulos">Usuarios</h2>
			<UserTable users={users} />
			<br />
			<br />
			<h2 className="text-center subtitulos">Habitaciones</h2>
			<br />
			<RoomTable rooms={rooms} />
		</div>
	);
};

export default AdminPanel;

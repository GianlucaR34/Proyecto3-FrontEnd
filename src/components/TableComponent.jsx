import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { faPen, faEye, faCircleXmark, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import hotelAPI from '../api/hotelAPI';
import Swal from 'sweetalert2';
const TableComponent = ({ info, tag }) => {
    // console.log(info)
    // console.log(tag)
    const [show, setShow] = useState(false);
    const [isEditable, setIsEditable] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editableData, setEditableData] = useState({});


    const handleClose = () => { setShow(false) };

    const handleView = (index, item) => {
        setIsEditable(false);
        setSelectedItem(item);
        setEditableData(item);
        setShow(true);
    };

    const handleEdit = (index, item) => {
        setIsEditable(true);
        setSelectedItem(item);
        setEditableData(item);
        setShow(true);
    };
    const handleCreateElement = async () => {
        Swal.fire({
            title: "Que deseas crear?",
            showCancelButton: true,
            confirmButtonText: "Habitaciones",
            cancelButtonText: "Usuarios"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Crear Habitacion',
                    html: `
                      <input id="type" class="form-control" placeholder="Tipo" required>
                      <input id="description" class="form-control" placeholder="Descripcion" required>
                      <input type="number" id="number" class="form-control" placeholder="Numero de Habitacion" required>
                      <input type="number" id="numberOfGuestMax" class="form-control" placeholder="Capacidad Maxima" required>
                      <input type="number" id="price" class="form-control" placeholder="Precio de Habitacion" required>
                      <input type="number" id="bath" class="form-control" placeholder="Baños totales" required>
                      <input type="number" id="meals" class="form-control" placeholder="Cantidad de comidas" required>
                    `,
                    focusConfirm: false,
                    preConfirm: () => {
                        const type = Swal.getPopup().querySelector('#type').value;
                        const description = Swal.getPopup().querySelector('#description').value;
                        const number = Swal.getPopup().querySelector('#number').value;
                        const numberOfGuestMax = Swal.getPopup().querySelector('#numberOfGuestMax').value;
                        const price = Swal.getPopup().querySelector('#price').value;
                        const bath = Swal.getPopup().querySelector('#bath').value;
                        const meals = Swal.getPopup().querySelector('#meals').value;
                        if (!type || !description || !number || !numberOfGuestMax || !price || !bath || !meals) {
                            Swal.showValidationMessage('Por favor ingresa todos los valores');
                        }
                        return { type, description, number, numberOfGuestMax, price, bath, meals };
                    }
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        console.log(result.value)
                        const bodyReq = {
                            "type": result.value.type,
                            "description": result.value.description,
                            "number": result.value.number,
                            "numberOfGuestMax": result.value.numberOfGuestMax,
                            "price": result.value.price,
                            "photo": '',
                            "bath": result.value.bath,
                            "meals": result.value.meals,
                        }
                        const req = await hotelAPI.post('roomReservation/createRoom/', bodyReq)
                        if (req) Swal.fire("Habitacion creada exitosamente")
                    }
                });
            } else {
                Swal.fire({
                    title: 'Crear Usuario',
                    html: `
                      <input id="userName" class="form-control" placeholder="Nombre" required>
                      <input id="userSurname" class="form-control" placeholder="Apellido" required>
                      <input type="number" id="userDNI" class="form-control" placeholder="DNI" required>
                      <input type="mail" id="userMail" class="form-control" placeholder="Correo" required>
                      <input type="password" id="userPassword" class="form-control" placeholder="Contraseña" required>
                    `,
                    focusConfirm: false,
                    preConfirm: () => {
                        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
                        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;
                        const userName = Swal.getPopup().querySelector('#userName').value;
                        const userSurname = Swal.getPopup().querySelector('#userSurname').value;
                        const userDNI = Swal.getPopup().querySelector('#userDNI').value;
                        const userMail = Swal.getPopup().querySelector('#userMail').value;
                        const userPassword = Swal.getPopup().querySelector('#userPassword').value;
                        if (!userName || !userSurname || !userDNI || !userMail || !userPassword) {
                            Swal.showValidationMessage('Por favor ingresa todos los valores');
                        } else if (!emailRegex.test(userMail)) {
                            Swal.showValidationMessage('El correo electrónico no es válido.');
                            if (!passwordRegex.test(userPassword)) {
                                Swal.showValidationMessage('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.');
                            }
                        }
                        return { userName, userSurname, userDNI, userMail, userPassword };
                    }
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const bodyReq = {
                            "mail": result.value.userMail,
                            "password": result.value.userPassword,
                            "userName": result.value.userName,
                            "userSurname": result.value.userSurname,
                            "userIdentification": result.value.userDNI,
                        }
                        const req = await hotelAPI.post('user/createUser', bodyReq)
                        if (req) Swal.fire("Usuario creado exitosamente")
                        // handlePatchRequest(result.value);
                    }
                });
            }
        });

    }
    const handleDelete = (index, item) => {
        const isRoom = item.type ? true : false
        if (isRoom) {
            Swal.fire({
                icon: "error",
                title: "Accion Prohibida",
                text: "No puedes eliminar una habitacion! ¿Que te pasa?"
            });
            return
        }
        Swal.fire({
            title: "¿Estas seguro que deseas eliminar este usuario?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: "No eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    const reqID = await hotelAPI.delete(`user/deleteUser/${item._id}`)
                    if (reqID) Swal.fire(reqID.data.msg)
                } catch (error) {
                    Swal.fire({ title: error.response.data.msg, icon: error.response.data.type });
                }
            }
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveChanges = async () => {
        // Aquí puedes manejar la lógica para guardar los cambios.
        if (editableData.mail) {
            try {
                const reqID = await hotelAPI.patch(`/user/modifyUser/${editableData._id}`, editableData)
                if (reqID) Swal.fire(reqID.data.msg)
            } catch (error) {
                console.log(error)
                Swal.fire({ title: 'Ha ocurrido un error' })
            }
        } else {
            // 
            try {
                const reqID = await hotelAPI.patch(`/roomReservation/modifyRoom/${editableData._id}`, editableData)
                if (reqID) Swal.fire(reqID.data.msg)
            } catch (error) {
                Swal.fire({ title: 'Ha ocurrido un error' })
            }
        }
        // Actualiza el estado global o realiza cualquier acción necesaria.
        setShow(false);
    };
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center align-middle'>
                        {tag.map((tagItem, index) => (
                            <th key={index}>{tagItem}</th>
                        ))}
                        <th>Acciones</th>
                        <td><Button variant="secondary"><FontAwesomeIcon icon={faCirclePlus} onClick={handleCreateElement}></FontAwesomeIcon></Button></td>
                    </tr>
                </thead>
                <tbody>
                    {info.map((item, rowIndex) => (
                        <tr key={rowIndex} className='text-center align-middle'>
                            {tag.map((tagItem, colIndex) => (
                                <td key={colIndex}>{item[tagItem]}</td>
                            ))}
                            <td className='text-center'>
                                <Button
                                    variant="secondary"
                                    className='mx-2 my-2'
                                    onClick={() => handleView(rowIndex, item)}
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </Button>
                                <Button
                                    variant="secondary"
                                    className='mx-2 my-2'
                                    onClick={() => handleEdit(rowIndex, item)}
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </Button>
                                <Button
                                    variant="secondary"
                                    className='mx-2 my-2'
                                    onClick={() => handleDelete(rowIndex, item)}
                                >
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {selectedItem && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{isEditable ? 'Edit Item' : 'View Item'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {tag.map((tagItem, index) => (
                                <Form.Group key={index} className="mb-3">
                                    <Form.Label>{tagItem}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name={tagItem}
                                        disabled={!isEditable}
                                        readOnly={!isEditable}
                                        value={editableData[tagItem] || ''}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            ))}
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        {isEditable && (
                            <Button variant="primary" onClick={handleSaveChanges}>
                                Guardar cambios
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default TableComponent;
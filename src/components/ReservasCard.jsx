import React, { useState } from 'react'
import { Button, Card, CardBody, CardImg, Modal } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'

const ReservasCard = ({ type, imagen, precio }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="reservas-card-container mb-3" >
            <Card className="reservas-card rounded"
                style={{ backgroundImage: `url(${imagen})` }}
            >
                <Card.Body className='rounded bodyCard' >
                    <CardBody className='cardBody'>
                        <Card.Title className='text-white TitleCard'>{type}</Card.Title>
                    </CardBody>
                    <Card.Footer className='row'>
                        <Button className="col-6 me-3 botonVer" variant="" onClick={handleShow}>Ver Más</Button>
                        <Card.Subtitle className='col-5 p-0 m-0 rounded justify-content-center d-flex align-items-center botonPrecio'>U$S {precio}</Card.Subtitle>
                    </Card.Footer>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </div>

    );
};


export default ReservasCard
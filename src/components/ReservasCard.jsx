import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Modal, Row } from 'react-bootstrap';
import hotelAPI from '../api/hotelAPI';

const ReservasCard = ({ type, price, description, bath, meals, photo, reservationInfo }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const makeReservation = async () => {
        const datoReserva = reservationInfo
        await hotelAPI.patch('/roomReservation/roomReserve/', datoReserva)
        setTimeout(() => {
            window.location.reload()
        }, 5000);
    }

    return (
        <div className="mb-3">
            <Card className="reservas-card rounded" style={{ backgroundImage: `url(${photo})` }}>
                <Card.Body className='rounded bodyCard'>
                    <CardBody className='cardBody'>
                        <Card.Title className='text-white TitleCard cardo-bold'>{type}</Card.Title>
                    </CardBody>
                    <Card.Footer className='row'>
                        <Button className="col-6 me-3 botonVer" onClick={handleShow}>Ver Más</Button>
                        <Card.Subtitle className='col-5 p-0 m-0 rounded justify-content-center d-flex align-items-center botonPrecio'>U$S {price}</Card.Subtitle>
                    </Card.Footer>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose} className=''>
                <Container className=''>
                    <Modal.Header closeButton >
                        <Modal.Title className='cardo-bold'>{type}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Col lg={12}>
                            <Row lg={12} className='px-5 cardo-regular'>
                                {description}
                            </Row>
                            <Row lg={6} className='justify-content-around py-3'>
                                <Container>
                                    <FontAwesomeIcon icon={faBath} className='text-secondary ' /> {bath}
                                </Container>
                                <Container>
                                    <FontAwesomeIcon icon={faUtensils} className='text-secondary ' /> {meals}
                                </Container>
                            </Row>
                        </Col>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn btn-dark rounded border-white cardo-regular' disabled>U$S{price}</Button>
                        <Button className='botonVer cardo-regular' onClick={makeReservation}>Realizar Reserva</Button>
                    </Modal.Footer>
                </Container>
            </Modal>
        </div >
    );
};

export default ReservasCard;

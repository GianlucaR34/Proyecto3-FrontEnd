import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

const Footer = () => {

  return (
    <footer className="text-white mt-5" style={{ backgroundColor: "black", padding: "3rem" }}>
      <Container >
        <Row className="d-flex justify-content-between align-middle ">
          <Col xs={12} md={4} className="h-100 d-flex justify-content-center text-center align-middle p-3">
            <p className="fs-1 p-0 m-0">&copy; {new Date().getFullYear()} Golden Lux</p>
          </Col>
          <Col xs={12} md={4} className=" text-center d-flex align-middle  justify-content-center flex-column h-100 p-3">
            <h5 className='p-0 m-0'>Direccion: Lamadrid 732</h5>
            <p className='p-0 m-0'>Buenos Aires - Argentina</p>
            <p className='p-0 m-0'>Contactanos al: 3813212353</p>
            <div className='d-flex justify-content-center w-100'>
              <NavLink className='text-white' href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} className='fs-1 me-3'></FontAwesomeIcon></NavLink>
              <NavLink className='text-white' href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} className='fs-1'></FontAwesomeIcon></NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );

};

export default Footer;

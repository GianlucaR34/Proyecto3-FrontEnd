// src/components/Footer.js
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center" style={{maxHeight:"14rem"}}>
      <Container className='container-footer'>
        <Row>
          <Col md="4">
            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} style={{height:"3rem",marginRight:"1rem"}} /></a> 
            <a href='http://instagram.com'><FontAwesomeIcon icon={faInstagram} style={{height:"3rem"}} /></a>
          </Col>
          <Col md="4">
            <h5>Contactanos al: 3813212353</h5>
          </Col>
          <Col md="4">
            <h5>Direccion: Lamadrid 732</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mt-3">&copy; {new Date().getFullYear()} Golden Lux</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

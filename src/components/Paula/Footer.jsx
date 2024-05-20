// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md="4">
            <h5>Facebook.com</h5>
            <h5>instagram.com</h5>
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
            <p className="mt-3">&copy; {new Date().getFullYear()} Mi Sitio Web</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

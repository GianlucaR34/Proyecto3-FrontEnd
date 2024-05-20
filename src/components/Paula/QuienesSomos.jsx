import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import perrito from '../../assets/Paula/descarga.jpeg'
import perritoFeliz from '../../assets/Paula/ilustracion.avif'

const QuienesSomos = () => {
  return (
    <Container>
      <h1 className="my-4">Acerca de nosotros</h1>
      <p>
        Somos un equipo de profesionales dedicados a la gestión de hoteles, con amplia
        experiencia en mejorar la eficiencia operativa, aumentar la satisfacción del cliente
        y maximizar la rentabilidad. Nuestro equipo está compuesto por expertos en diversas
        áreas de la industria hotelera.
      </p>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={perrito} />
            <Card.Body>
              <Card.Title>Integrante 1</Card.Title>
              <Card.Text>Descripción breve del integrante 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={perritoFeliz} />
            <Card.Body>
              <Card.Title>Integrante 2</Card.Title>
              <Card.Text>Descripción breve del integrante 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Integrante 3</Card.Title>
              <Card.Text>Descripción breve del integrante 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Integrante 4</Card.Title>
              <Card.Text>Descripción breve del integrante 4.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos;

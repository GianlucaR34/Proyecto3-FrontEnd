import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import celeste from '../../assets/Paula/cele.jpg'
import paula from '../../assets/Paula/pau.jpg'
import leonel from '../../assets/Paula/leo.jpg'
import gian from '../../assets/Paula/gian.jpg'
import './css/quienessomos.css'
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
            <Card.Img className='image' variant="top" src={celeste} />
            <Card.Body>
              <Card.Title>Developer</Card.Title>
              <Card.Text> Celeste Lara 23 años.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img className='image' variant="top" src={paula} />
            <Card.Body>
              <Card.Title>Developer</Card.Title>
              <Card.Text>Paula Roldan 32 años</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img className='image' variant="top" src={leonel} />
            <Card.Body>
              <Card.Title>Developer</Card.Title>
              <Card.Text>Leonardo Balbastro 33 años</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img className='image' variant="top" src={gian} />
            <Card.Body>
              <Card.Title>Scrum Developer</Card.Title>
              <Card.Text>Gianluca Sanguinetti 24 años</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos;

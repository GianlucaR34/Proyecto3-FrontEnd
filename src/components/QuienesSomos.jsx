import { Container, Row, Col, Card } from 'react-bootstrap';
import celeste from '../assets/cele.jpg'
import paula from '../assets/pau.jpg'
import leonel from '../assets/leonardo.jpg'
import gian from '../assets/gian.jpg'
import '../css/quienessomos.css'
const QuienesSomos = () => {
  return (
    <Container className='container-quien'>
      <h1 className="my-4 text">Acerca de nosotros</h1>
      <p className='text'>
        Somos un equipo de profesionales dedicados a la gestión de hoteles, con amplia
        experiencia en mejorar la eficiencia operativa, aumentar la satisfacción del cliente
        y maximizar la rentabilidad. Nuestro equipo está compuesto por expertos en diversas
        áreas de la industria hotelera.
      </p>
      <Row>
        <Col md={3}>
          <Card>
          <a href="https://www.linkedin.com/in/mariacelestelara/">

            <Card.Img className='image' variant="top" src={celeste} />
            <Card.Body>
              <Card.Title className='text'> <b>Celeste Lara</b> </Card.Title>
              <Card.Text className='text'>Developer</Card.Text>
            </Card.Body>
          </a>

          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <a href="https://www.linkedin.com/in/paula-roldan-88b743298/">
            <Card.Img className='image' variant="top" src={paula} />
            <Card.Body>
              <Card.Title className='text'> <b>Paula Roldan</b>  </Card.Title>
              <Card.Text className='text'>Developer</Card.Text>
            </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <a href="https://www.linkedin.com/in/leobalbastro/">
            <Card.Img className='image' variant="top" src={leonel} />
            <Card.Body>
              <Card.Title className='text'> <b>Leonardo Balbastro </b> </Card.Title>
              <Card.Text className='text'>Developer</Card.Text>
            </Card.Body>
            </a>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <a href="https://www.linkedin.com/in/gianluca-sanguinetti-884806217/">
            <Card.Img className='image' variant="top" src={gian} />
            <Card.Body>
              <Card.Title className='title'> <b> Gianluca Sanguinetti</b> </Card.Title>
              <Card.Text className='text'>Scrum & Developer</Card.Text>
            </Card.Body>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuienesSomos;

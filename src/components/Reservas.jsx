import { useState, useEffect } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { Button, Col, Container, FloatingLabel, Form, Row, Tab, Tabs } from 'react-bootstrap';
import '../css/Reservas.css'
import MyCard from './MyCard';
import test from '../assets/spa-duhau-1-1024x683.jpg'
import ReservasCard from './ReservasCard';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import axios from 'axios';
import hotelAPI from '../api/hotelAPI';
import { parse } from 'date-fns';

const Reservas = () => {
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const [isSearching, setIsSearching] = useState(false)
  const [datesDisabled, setDatesDisables] = useState([])
  const minDate = dayjs().startOf('day').toDate()
  const [Nombre, setNombre] = useState('')
  const [Apellido, setApellido] = useState('')
  const [dni, setDni] = useState('')
  const [memberCount, setMemberCount] = useState(0)

  let formattedDatesDisabled = []
  // Función para manejar el cambio de fecha
  const handleDateChange = async (date) => {
    let newInitialDate = new Date(date)
    let newFinalDate = new Date(date)
    setFinalDate(newFinalDate)
    setInitialDate(newInitialDate)

    // Verifica si la fecha es válida
    if (date instanceof Date && !isNaN(date)) {
      const selectedDate = date.toISOString();
      setInitialDate(selectedDate);
      setFinalDate(selectedDate);
    }
  }
  datesDisabled.forEach(fecha => {
    const dayToDate = fecha.substr(8, 2) - 0
    const monthToDate = fecha.substr(5, 2) - 1
    const yearToDate = fecha.substr(0, 4)
    const fechaFormated = new Date(yearToDate, monthToDate, dayToDate)
    const correctDate = new Date(fechaFormated)

    formattedDatesDisabled.push(correctDate)
  })
  const shouldDisableDate = (date) => {
    const year = (date.$d).getFullYear();
    const month = (date.$d).getMonth();
    const day = (date.$d).getDate();
    let isDisable = false;
    const currentYear = new Date().getFullYear()
    formattedDatesDisabled.forEach(rawDate => {
      const dateFormatted = new Date(rawDate);
      let currentMonth = dateFormatted.getMonth()
      let currentDay = dateFormatted.getDate()

      if (year === currentYear && month === currentMonth && day === currentDay) {
        isDisable = true;
      }
    })
    return isDisable
  };

  //funcion para buscar habitaciones y hacer la reserva
  const fetchRooms = async (quantityGuest) => {
    const rooms = await hotelAPI.patch('/roomReservation/roomReserve', (res) => {
      console.log(res)
    })

    console.log(rooms)
  }
  // const handleQueryRoom = async (initialDate, finalDate, firstname, surname, dni, quantityGuest) => {

  // }
  //fetch de las reservas
  useEffect(() => {
    const fetchData = async () => {
      const response = await hotelAPI.get('/roomReservation/disableDates')
      const responseDates = response.data

      // console.log(typeof responseDates)
      setDatesDisables(responseDates)
    }
    fetchData()
  }, [])


  //codigo
  return (
    <Container className='mh-max container-main'>

      <Tabs
        defaultActiveKey="onlyOne"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="onlyOne" title="Visita">
          <Container fluid>
            <Row>
              <Col lg={2} className='text-center rounded datePicker p-2 me-3'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker onChange={handleDateChange} disablePast shouldDisableDate={shouldDisableDate} className='bg-white rounded mb-3' label="Fecha a reservar" />
                </LocalizationProvider>

                <FloatingLabel controlId="floatingInput" label="Nombre" className="text-secondary">
                  <Form.Control type="text" className='mb-3' onChange={(e) => setNombre(e.target.value)} placeholder="Juan" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Apellido" className="text-secondary">
                  <Form.Control type="text" className='mb-3' onChange={(e) => setApellido(e.target.value)} placeholder="Perez" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="DNI" className="text-secondary">
                  <Form.Control type="text" className='mb-3' onChange={(e) => setDni(e.target.value)} placeholder="95955955" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Cantidad de Personas" className="text-secondary mb-3">
                  <Form.Select onChange={(e) => setMemberCount(parseInt(e.target.value))}>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3+" >3+</option>
                  </Form.Select>
                </FloatingLabel>
                <Button className='btn-secondary border border-3 rounded border-secondary' onClick={fetchRooms} >Buscar reservas</Button>
              </Col>
              <Col lg={9} className='text-center rounded datePicker mt-2'>
                <Row lg={3} className='bg-transparent'>
                  <ReservasCard type='Viaje de negocios' imagen={test} precio={350} />
                  <ReservasCard type='Visita a familiares' imagen={test} precio={350} />
                  <ReservasCard type='Presentacion a examenes universitarios' imagen={test} precio={350} />
                  <ReservasCard type='Turismo' imagen={test} precio={350} />
                  <ReservasCard type='algo' imagen={test} precio={350} />
                  <ReservasCard type='algo' imagen={test} precio={350} />
                </Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="fewOnes" title="Temporal">
        </Tab>
        <Tab eventKey="vip-section" title="VIP" disabled>
          SECCION VIP CON NUESTRAS MEJORES HABITACIONES
        </Tab>
      </Tabs>
    </Container >
  )
}

export default Reservas
import { useState, useEffect, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { createRoot } from 'react-dom/client'
import { Button, Col, Container, FloatingLabel, Form, Row, Tab, Tabs } from 'react-bootstrap';
import '../css/Reservas.css'
import ReservasCard from './ReservasCard';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import hotelAPI from '../api/hotelAPI';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

const Reservas = () => {
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [isSearching, setIsSearching] = useState(false)
  const [roomsLoaded, setRoomsLoaded] = useState(false)
  const [datesDisabled, setDatesDisables] = useState([])
  const [Nombre, setNombre] = useState('')
  const [Apellido, setApellido] = useState('')
  const [date, setDate] = useState(new Date())
  const [DNI, setDNI] = useState('')
  const [memberCount, setMemberCount] = useState(1)
  const [formCompletted, setFormCompletted] = useState(false)
  let currentTabValue = 'onlyOne'
  let formattedDatesDisabled = []
  const selectRefTab1 = useRef(null);
  const selectRefTab2 = useRef(null);
  const datePickerOnlyOne = useRef(null);
  const datePickerForAnyone = useRef(null);

  const buttonActions = () => {
    if (finalDate) {
      handleDateReserve(initialDate, finalDate)
    } else {
      handleDateReserve(initialDate, initialDate)
    }
    try {
      fetchRooms()
    } catch (error) {
      const handleLogout = () => {
        // borrar datos del localStorage
        localStorage.removeItem('TokenJWT');
        localStorage.removeItem('isAdmin');
        Swal.fire({
          title: "Sesión expirada!",
          text: "La sesión se ha cerrado.",
          icon: "danger"
        });
        // Actualizar estados
        // setIsLoggedIn(false);
        // setIsAdmin(false);
        // Redirigir al usuario a la página de inicio si todo sale bien y diosito quiere

        window.location.href = '/';
      };
      handleLogout
    }
  }


  // Función para manejar el cambio de fecha
  const handleTabChange = (selectedTab) => {
    let selectedOptionValue;
    if (selectedTab === "onlyOne") {
      selectedOptionValue = selectRefTab1.current.value;
    } else if (selectedTab === "fewOnes") {
      selectedOptionValue = selectRefTab2.current.value;
    }
    setMemberCount(parseInt(selectedOptionValue))
    // setIsSearching(false)
    setIsSearching(false)
    setInitialDate(dayjs(new Date()))
    setFinalDate(dayjs(new Date()))
    const sectionTargets = document.getElementsByClassName('fetchDiv');
    // Eliminar elementos anteriores
    Array.from(sectionTargets).forEach((target) => {
      target.innerHTML = '';
      setRoomsLoaded(false)
    });
  }

  const handleDateReserve = async (initialDate, finalDate) => {
    let newInitialDate = new Date(initialDate)
    setInitialDate(newInitialDate)
    let newFinalDate = new Date(finalDate)
    setFinalDate(newFinalDate)


    // Verifica si la fecha es válida
    if (initialDate instanceof Date && !isNaN(initialDate)) {
      const selectedDate = initialDate.toISOString();
      setInitialDate(selectedDate);
      setFinalDate(selectedDate)
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
  //funcion para obtener datos basicos del usuario:
  const getUser = async () => {
    if (!localStorage.getItem('TokenJWT')) {
      setNombre('')
      setApellido('')
      setDNI('')
      return
    }
    const fetchData = await hotelAPI.get('user/getUserLoggedIn')
    const { nombre, apellido, dni } = fetchData.data
    setNombre(nombre)
    setApellido(apellido)
    setDNI(dni)
  }
  //funcion para buscar habitaciones y hacer la reserva
  const fetchRooms = async () => {
    if (!formCompletted) {
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: "Recuerda rellenar correctamente los campos"
      });
      return
    }
    const sectionTargets = document.getElementsByClassName('fetchDiv');
    // Eliminar elementos anteriores
    Array.from(sectionTargets).forEach((target) => {
      target.innerHTML = '';
      setRoomsLoaded(false)
    });

    const rooms = (await hotelAPI.get('/roomReservation/roomList')).data

    rooms.forEach((room) => {
      const { number, type, numberOfGuestMax, price, description, bath, meals, photo } = room;
      Array.from(sectionTargets).forEach((target) => {
        // Crear un nuevo elemento div para cada ReservasCard
        const reservasCardContainer = document.createElement('div');
        // Renderizar el componente ReservasCard en el contenedor

        if (numberOfGuestMax <= memberCount && memberCount == 1) {
          const root = createRoot(reservasCardContainer);
          root.render(<ReservasCard type={type} numberOfGuestMax={memberCount} price={price} photo={photo} description={description} bath={bath} meals={meals} reservationInfo={{ roomNumber: number, initialDate, finalDate, Nombre, Apellido, DNI }} />);
          // Agregar el contenedor al target
          target.appendChild(reservasCardContainer);
          return
        }
        if (numberOfGuestMax > memberCount && memberCount != 1) {
          const root = createRoot(reservasCardContainer);
          root.render(<ReservasCard type={type} numberOfGuestMax={memberCount} price={price} photo={photo} description={description} bath={bath} meals={meals} reservationInfo={{ roomNumber: number, initialDate, finalDate: finalDate || initialDate, Nombre, Apellido, DNI }} />);
          // Agregar el contenedor al target
          target.appendChild(reservasCardContainer);
          return
        }
      });
    });
    setRoomsLoaded(true)
    setIsSearching(true)
  }
  // const handleQueryRoom = async (initialDate, finalDate, firstname, surname, dni, quantityGuest) => {
  // }
  //useEffects para las distintas cosas necesarias
  useEffect(() => {
    if (initialDate == null || !Nombre || !Apellido || !DNI) {
      setFormCompletted(false);
    } else {
      setFormCompletted(true);
    }

  }, [initialDate, Nombre, Apellido, DNI]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await hotelAPI.get('/roomReservation/disableDates')
      const responseDates = response.data
      // console.log(typeof responseDates)
      setDatesDisables(responseDates)
    }
    fetchData()
    getUser()
  }, [])

  //codigo
  return (
    <Container className='h-100 py-5 '>
      <Tabs defaultActiveKey="onlyOne" id="uncontrolled-tab-example" className="mb-3" onSelect={handleTabChange}>
        <Tab eventKey="onlyOne" title="Reserva Individual">
          <Container fluid>
            <Row>
              <Col lg={2} className='text-center rounded datePicker p-2 me-3'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker ref={datePickerOnlyOne} onChange={(e) => setInitialDate(e.$d)} disablePast shouldDisableDate={shouldDisableDate} className='bg-white rounded mb-3' label="Fecha a reservar" disabled={isSearching ? true : false} value={dayjs(date)} required />
                </LocalizationProvider>
                <Form.Group controlId="nombre">
                  <FloatingLabel controlId="floatingInput" label="Nombre" className="text-secondary">
                    <Form.Control type="text" className='mb-3' onChange={(e) => setNombre(e.target.value.trim())} placeholder="Juan" disabled={isSearching ? true : false} value={Nombre} />
                    <Form.Control.Feedback type="invalid"> Por favor ingrese su nombre. </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="apellido">
                  <FloatingLabel controlId="floatingInput" label="Apellido" className="text-secondary">
                    <Form.Control type="text" className='mb-3' onChange={(e) => setApellido(e.target.value.trim())} placeholder="Perez" disabled={isSearching ? true : false} value={Apellido} />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="dni">
                  <FloatingLabel controlId="floatingInput" label="DNI" className="text-secondary">
                    <Form.Control type="text" className='mb-3' onChange={(e) => setDNI(parseInt(e.target.value.trim()))} placeholder="95955955" disabled={isSearching ? true : false} value={DNI} />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="Quantity">
                  <FloatingLabel controlId="floatingInput" label="Cantidad de Personas" className="text-secondary mb-3">
                    <Form.Select ref={selectRefTab1} >
                      <option value="1" >1</option>
                      <option value="2" disabled>2</option>
                      <option value="3" disabled>3</option>
                      <option value="4" disabled>4+</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Button className='btn-secondary border border-3 rounded border-secondary' onClick={fetchRooms} disabled={!formCompletted}>Buscar reservas</Button>
              </Col>
              <Col lg={9} className='text-center rounded datePicker mt-2'>
                <Row lg={3} className='bg-transparent fetchDiv'></Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="fewOnes" title="Reserva Grupal">
          <Container fluid>
            <Row>
              <Col lg={2} className='text-center rounded datePicker p-2 me-3'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker ref={datePickerForAnyone} onChange={(e) => setInitialDate(e.$d)} disablePast shouldDisableDate={shouldDisableDate} className='bg-white rounded mb-3' label="Fecha a reservar" disabled={isSearching ? true : false} value={dayjs(date)} required />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker ref={datePickerForAnyone} onChange={(e) => setFinalDate(e.$d)} disablePast shouldDisableDate={shouldDisableDate} className='bg-white rounded mb-3' label="Fecha a finalizar" disabled={isSearching ? true : false} value={dayjs(date)} required />
                </LocalizationProvider>
                <Form.Group controlId="nombre">
                  <FloatingLabel controlId="floatingInput" label="Nombre" className="text-secondary">
                    <Form.Control type="text" className='mb-3' onChange={(e) => setNombre(e.target.value.trim())} placeholder="Juan" disabled={isSearching ? true : false} value={Nombre} />
                    <Form.Control.Feedback type="invalid"> Por favor ingrese su nombre. </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="apellido">
                  <FloatingLabel controlId="floatingInput" label="Apellido" className="text-secondary">
                    <Form.Control type="text" className='mb-3' onChange={(e) => setApellido(e.target.value.trim())} placeholder="Perez" disabled={isSearching ? true : false} value={Apellido} />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="dni">
                  <FloatingLabel controlId="floatingInput" label="DNI" className="text-secondary">
                    <Form.Control type="text" className='mb-3' onChange={(e) => setDNI(parseInt(e.target.value.trim()))} placeholder="95955955" disabled={isSearching ? true : false} value={DNI} />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="Quantity">
                  <FloatingLabel controlId="floatingInput" label="Cantidad de Personas" className="text-secondary mb-3">
                    <Form.Select disabled={isSearching} ref={selectRefTab2}>
                      <option value="1" disabled>1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4+</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Button className='btn-secondary border border-3 rounded border-secondary' onClick={buttonActions} disabled={!formCompletted}>Buscar reservas</Button>
              </Col>
              <Col lg={9} className='text-center rounded datePicker mt-2'>
                <Row lg={3} className='bg-transparent fetchDiv'></Row>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="vip-section" title="VIP" disabled>
          SECCION VIP CON NUESTRAS MEJORES HABITACIONES
        </Tab>
      </Tabs>
    </Container >
  )
}

export default Reservas
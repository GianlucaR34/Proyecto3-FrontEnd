import TableComponent from './TableComponent'
import hotelAPI from '../api/hotelAPI'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const Habitaciones = () => {
    const [actualPage, setActualPage] = useState(0) //TODO SetActualPage
    const [rooms, setRooms] = useState([])
    const [tagRooms, setTagRooms] = useState([])

    const fetchRoomsList = async () => {
        try {
            const roomsList = await hotelAPI.get(`roomReservation/roomList?p=0`);
            const rooms = roomsList.data
            let roomsArray = []
            rooms.map((room) => {
                const { _id, type, description, number, price, numberOfGuestMax, bath, meals } = room
                roomsArray.push({ _id, type, description, number, price, numberOfGuestMax, bath, meals })
            })

            setRooms(roomsArray)
            setTagRooms(Object.keys(roomsArray[0]))
        } catch (error) {
            console.error('Error fetching room list:', error);
        }
    };
    useEffect(() => {
        fetchRoomsList()
    }, [])


    return (

        <Container className='tableInfo d-flex text-center align-items-center justify-content-center'>
            <TableComponent info={rooms} tag={tagRooms} />
        </Container>
        // <></>
    )
}

export default Habitaciones
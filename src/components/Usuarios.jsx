import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import hotelAPI from '../api/hotelAPI';
import TableComponent from './TableComponent';

const Usuarios = () => {
    const [userArrayInfo, setUserArray] = useState([]);
    const [userArrayTag, setUserTag] = useState([]);

    const fetchUsersList = async () => {
        try {
            const userList = await hotelAPI.get(`user/listUser`);
            const users = userList.data;
            console.log(users)
            let usersArray = []
            users.map((user) => {
                const { _id, mail, userName, userSurname, userIdentification } = user
                usersArray.push({ _id, mail, userName, userSurname, userIdentification })
            })
            setUserTag(Object.keys(usersArray[0])) // Obtener las keys de la primera entrada para las etiquetas
            setUserArray(usersArray); // Establecer los datos de usuario en el estado
            // console.log(usersArray)
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    useEffect(() => {
        fetchUsersList();
    }, []);

    return (
        <Container className='tableInfo'>
            <TableComponent info={userArrayInfo} tag={userArrayTag} />
        </Container>
    );
};

export default Usuarios;

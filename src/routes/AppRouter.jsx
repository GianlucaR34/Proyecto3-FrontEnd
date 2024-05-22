import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reservas } from '../components/Leo/Reservas';
import QuienesSomos from '../components/Paula/QuienesSomos';
import RegistroUsuario from '../components/Paula/RegistroUsuario';
import Login from '../components/Paula/Login';
import Home from '../components/Celeste/Home';
import Galeria from '../components/Gianluca/Galeria';
import Contactos from '../components/Gianluca/Contactos';
import 'bootstrap/dist/css/bootstrap.min.css';



export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/roomReservation" element={<Reservas/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<QuienesSomos/>}/>
            <Route path="/register" element={<RegistroUsuario/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/galery" element={<Galeria/>}/>
            <Route path="/contact" element={<Contactos/>}/>
        </Routes>
    </BrowserRouter>
  )
}

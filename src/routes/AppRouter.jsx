import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reservas } from '../components/Leo/Reservas';
import QuienesSomos from '../components/Paula/QuienesSomos';
import Footer from '../components/Paula/Footer';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/roomReservation" element={<Reservas/>}/>
            <Route path="/about" element={<QuienesSomos/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuienesSomos from './Paula/QuienesSomos';
import { Nav } from './Gianluca/Nav';
import Footer from './Paula/Footer';
import RegistroUsuario from './Paula/RegistroUsuario';
import Login from './Paula/Login';
import Home from './Celeste/Home';
import Galeria from './Gianluca/Galeria';
import Contactos from './Gianluca/Contactos';
import ErrorPage from './Leo/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<QuienesSomos />} />
				<Route path="/register" element={<RegistroUsuario />} />
				<Route path="/login" element={<Login />} />
				<Route path="/galery" element={<Galeria />} />
				<Route path="/contact" element={<Contactos />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

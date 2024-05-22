import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuienesSomos from '../components/Paula/QuienesSomos';
import { Nav } from '../components/Gianluca/Nav';
import Footer from '../components/Paula/Footer';
import RegistroUsuario from '../components/Paula/RegistroUsuario';
import Login from '../components/Paula/Login';
import Home from '../components/Celeste/Home';
import Galeria from '../components/Gianluca/Galeria';
import Contactos from '../components/Gianluca/Contactos';
import ErrorPage from '../components/Leo/ErrorPage';
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

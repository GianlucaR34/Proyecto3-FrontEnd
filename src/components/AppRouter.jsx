import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuienesSomos from './QuienesSomos';
import { Nav } from './Nav';
import Footer from './Footer';
import RegistroUsuario from './RegistroUsuario';
import Login from './Login';
import Home from './Home';
import AdminPanel from './AdminPanel';
import Galeria from './Galeria';
import Contactos from './Contactos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservas from './Reservas';
import ErrorPage from './ErrorPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/404" element={<ErrorPage />} />
				<Route path="/reserves" element={<Reservas />} />
				<Route path="/panel-admin" element={<AdminPanel />} />
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<QuienesSomos />} />
				<Route path="/register" element={<RegistroUsuario />} />
				<Route path="/login" element={<Login />} />
				<Route path="/galery" element={<Galeria />} />
				<Route path="/contact" element={<Contactos />} />
				<Route path="/404" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

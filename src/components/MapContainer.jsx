import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api'; // Importa componentes de Google Maps
import '../css/MapContainer.css';
function MapContainer() {
	// Coordenadas del lugar
	const center = { lat: -34.603722, lng: -58.381592 };

	// Opciones del mapa
	const mapOptions = {
		zoom: 15,
		center: center,
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyBdqmPPjySntUN6MMWwMx_FymVvJ5VTAF8">
			{' '}
			{/* Reemplaza TU_API_KEY con tu clave de API de Google Maps */}
			<GoogleMap
				mapContainerStyle={{ height: '100%', width: '100%' }}
				options={mapOptions}
			>
				{/* Contenido del mapa, como marcadores o capas */}
			</GoogleMap>
		</LoadScript>
	);
}

export default MapContainer;

import React, { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../css/MapContainer.css';

function MapContainer() {
	const mapRef = useRef(null);
	const markerRef = useRef(null);

	// Coordenadas del lugar
	const center = { lat: -26.8233, lng: -65.2775 };

	// Opciones del mapa
	const mapOptions = {
		zoom: 15,
		center: center,
	};

	useEffect(() => {
		if (window.google && window.google.maps && window.google.maps.marker) {
			const { AdvancedMarkerElement } = window.google.maps.marker;
			if (mapRef.current && !markerRef.current) {
				markerRef.current = new AdvancedMarkerElement({
					position: center,
					map: mapRef.current.state.map,
				});
			}
		}
	}, []);

	return (
		<LoadScript
			googleMapsApiKey="AIzaSyBdqmPPjySntUN6MMWwMx_FymVvJ5VTAF8"
			onLoad={() => console.log('Google Maps API loaded successfully')}
			onError={(e) => console.error('Error loading Google Maps API', e)}
		>
			<GoogleMap
				mapContainerStyle={{ height: '100%', width: '100%' }}
				options={mapOptions}
				onLoad={(map) => (mapRef.current = map)}
			/>
		</LoadScript>
	);
}

export default MapContainer;

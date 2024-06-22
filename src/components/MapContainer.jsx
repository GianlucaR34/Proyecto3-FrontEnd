import React, { useRef, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../css/MapContainer.css';

function MapContainer() {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const mapRef = useRef(null);

    const center = { lat: -26.8233, lng: -65.2775 };

    const mapOptions = {
        zoom: 15,
        center: center,
    };

    const onLoad = map => {
        mapRef.current = map;
        setMap(map);
    };

    const onUnmount = map => {
        setMap(null);
    };

    useEffect(() => {
        if (mapRef.current) {
            const newMarker = new window.google.maps.Marker({
                position: center,
                map: mapRef.current,
                title: 'Aquí estoy!',
            });
            setMarker(newMarker);
        }
    }, [map]);

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBdqmPPjySntUN6MMWwMx_FymVvJ5VTAF8"
            onLoad={() => console.log('Google Maps API loaded successfully')}
            onError={(e) => console.error('Error loading Google Maps API', e)}
        >
            <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                center={center}
                zoom={15}
                options={mapOptions}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {marker && <Marker position={center} map={mapRef.current} title="Aquí estoy!" />}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapContainer;
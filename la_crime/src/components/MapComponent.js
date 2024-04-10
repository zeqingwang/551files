
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '400px', height: '400px' };


const MapComponent = ({ data }) => (
    <LoadScript googleMapsApiKey="AIzaSyBw03WM4TYrA1powE4pKdMIHN_clays-nU">
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: data.length ? data[0].latitude : -34.397, lng: data.length ? data[0].longitude : 150.644 }}
            zoom={10}
        >
            {data.map((item, index) => (
                <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} />
            ))}
        </GoogleMap>
    </LoadScript>
);

export default MapComponent;

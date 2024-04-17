
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '600px', height: '600px' };
const getMarkerColor = (violenceLevel) => {
    switch (violenceLevel) {
        case 3:
            return 'https://maps.google.com/mapfiles/kml/paddle/red-blank.png';
        case 2:
            return 'https://maps.google.com/mapfiles/kml/paddle/ylw-blank.png';
        case 1:
            return 'https://maps.google.com/mapfiles/kml/paddle/wht-blank.png';
        default:
            return 'http://maps.google.com/mapfiles/kml/paddle/blu-blank.png'; 
    }
};
const handleMarkerClick = async (drNo) => {

    // const url = '/LACrimeAnalysisTool(2)/crimeById'
    // console.log(url)

    // try {
    //     
    //     const querybody = {


    //         "drNo": drNo

    //     };
    //     const response = await fetch(url,
    //         {
    //             method: 'POST',
    //             mode: 'no-cors',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(querybody)
    //         }
    //     );
    //     console.log(response);
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }

    //     const result = await response.json();
    //     console.log(result);

    // } catch (error) {
    //     console.error('Failed to fetch data:', error);
    // }
    const detailurl = `/LACrimeAnalysisTool/crimeById?drNo=` + drNo;

    //console.log(url);

    try {
 
        const response = await fetch(detailurl, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/html'
            }
        });
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const resultHtml = await response.text();
        console.log(resultHtml);

        const blob = new Blob([resultHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // window.open(url, '_blank');
        const features = "width=500,height=600,scrollbars=yes,resizable=yes";
        const popupWindow = window.open(url, '_blank', features);
        if (popupWindow) popupWindow.focus();
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }

};


const MapComponent = ({ data, center, setPosition }) => (
    <LoadScript googleMapsApiKey="AIzaSyBw03WM4TYrA1powE4pKdMIHN_clays-nU">
        <GoogleMap
            mapContainerStyle={containerStyle}
            //center={{ lat: data.length ? data[0].latitude : -34.397, lng: data.length ? data[0].longitude : 150.644 }}
            center={{ lat: center[0], lng: center[1] }}
            zoom={10}
            onClick={ev => {
                setPosition(ev.latLng.lat(),ev.latLng.lng());
                console.log("latitide = ", ev.latLng.lat());
                console.log("longitude = ", ev.latLng.lng());
            }}
        >
            {data.slice(0, 5000).map((item, index) => (

                <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} onClick={() => handleMarkerClick(item.drNo)} icon={getMarkerColor (item.violenceLevel)} />
            ))}
        </GoogleMap>
    </LoadScript>
);

export default MapComponent;

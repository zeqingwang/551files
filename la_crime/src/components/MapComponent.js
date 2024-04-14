
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = { width: '400px', height: '400px' };
const handleMarkerClick = async (drNo) => {

    // const url = '/LACrimeAnalysisTool(2)/crimeById'
    // console.log(url)

    // try {
    //     // Making a POST request with Fetch API
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
    const detailurl = `/LACrimeAnalysisTool(2)/crimeById?drNo=` + drNo;

    //console.log(url);

    try {
        // Making a GET request with Fetch API
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

        // Assuming the response is direct HTML content
        const resultHtml = await response.text();
        console.log(resultHtml);

        // Use a blob to create a URL for the HTML content
        const blob = new Blob([resultHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // Open the result in a new tab
        window.open(url, '_blank');
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }

};

const MapComponent = ({ data, center }) => (
    <LoadScript googleMapsApiKey="AIzaSyBw03WM4TYrA1powE4pKdMIHN_clays-nU">
        <GoogleMap
            mapContainerStyle={containerStyle}
            //center={{ lat: data.length ? data[0].latitude : -34.397, lng: data.length ? data[0].longitude : 150.644 }}
            center={{ lat: center[0], lng: center[1] }}
            zoom={10}
        >
            {data.map((item, index) => (

                <Marker key={index} position={{ lat: item.latitude, lng: item.longitude }} onClick={() => handleMarkerClick(item.drNo)} />
            ))}
        </GoogleMap>
    </LoadScript>
);

export default MapComponent;

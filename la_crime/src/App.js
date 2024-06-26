import React, { useState } from 'react';
import FilterComponent from './components/FilterComponent';
import MapComponent from './components/MapComponent';

function App() {
  const [filters, setFilters] = useState({
    dateOccurred: '',
    areaName: '',
    crimeCode: '',
    violentLevel: 3,
    latitude: 34.022415,
    longitude: -118.285530,
    radius: 1,
    selectionType: 'pinpoint' // default to 'area'
  });

  const [data, setData] = useState([]);
  const [center, setCenter] = useState([34.022415, -118.285530])
  const onSearch = async () => {
 
    //const url = 'http://lacrimeexplorer-env.eba-mw97embs.us-west-1.elasticbeanstalk.com/search-crimes';
    const url = '/LACrimeAnalysisTool/search-crimes'

    console.log(filters);
    if (filters.selectionType === 'pinpoint') {
     
      const latitude = Number(filters.latitude);
      const longitude = Number(filters.longitude);
      const radius = Number(filters.radius);

      if (isNaN(latitude) || latitude === 0 || isNaN(longitude) || longitude === 0 || isNaN(radius) || radius === 0) {
        alert('In pinpoint mode, latitude, longitude, and radius cannot be blank!');
        console.log('Validation error');
        return;
      }
    }

    const querybody = {

      //"startDate": "2010-01-01",
      "startDate": filters.dateOccurred == '' ? '2010-01-01' : filters.dateOccurred + '-01-01',
      "endDate": filters.dateOccurred == '' ? '2023-12-31' : filters.dateOccurred + '-12-31',
      "crimeCode": filters.crimeCode,
      "longitude": filters.selectionType === 'pinpoint' ? filters.longitude : null,
      "latitude": filters.selectionType === 'pinpoint' ? filters.latitude : null,
      "radius": filters.selectionType === 'pinpoint' ? filters.radius : null,
      "areaName": filters.selectionType === 'area' ? filters.areaName : null,
      "violenceLevel": filters.violentLevel,
      "filterBy": filters.selectionType

    };
    try {
      console.log(querybody);
      const response = await fetch(url,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(querybody)
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setCenter([filters.latitude, filters.longitude]);
      setData(result);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }

  };
  const setPosition = (lat,lng) => {
    console.log("call app.js function ")
    setFilters(prevFilters => ({
      
      ...prevFilters,
      latitude: lat,
      longitude: lng  
    }));
  };
  const handleTestClick = async () => {


    const detailurl = `/LACrimeAnalysisTool(4)/crime-codes`;
    //http://localhost:8080/LACrimeAnalysisTool(4)/crime-codes

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

      window.open(url, '_blank');
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }

  };


  return (
    <div className="App">
      <FilterComponent filters={filters} setFilters={setFilters} onSearch={onSearch} />
       {/* <MapComponent data={data} center={center}   /> */}
       <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MapComponent data={data} center={center} setPosition={setPosition} />
       </div>
     
      {/* <button onClick={handleTestClick}>Test</button> */}
    </div>

  );
}

export default App;
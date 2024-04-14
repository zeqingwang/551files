import React, { useState } from 'react';
import FilterComponent from './components/FilterComponent';
import MapComponent from './components/MapComponent';

function App() {
  const [filters, setFilters] = useState({
    dateOccurred: '',
    areaName: '',
    crimeCode: '',
    violentLevel: '',
    latitude: 34.022415,
    longitude: -118.285530,
    radius: 10
  });

  const [data, setData] = useState([]);
  const [center, setCenter] = useState([34.022415, -118.285530])
  const onSearch = async () => {
    // Fetch data based on filters
    // For demonstration, we're just setting random data
    //const url = 'http://lacrimeexplorer-env.eba-mw97embs.us-west-1.elasticbeanstalk.com/search-crimes';
    const url = '/LACrimeAnalysisTool(2)/search-crimes'
    console.log(filters)
    const querybody = {

      //"startDate": "2010-01-01",
      "startDate": filters.dateOccurred == '' ? '2010-01-01' : filters.dateOccurred + '-01-01',
      "endDate": filters.dateOccurred == '' ? '2023-12-31' : filters.dateOccurred + '-12-31',
      "crimeCode": "900",
      "longitude": filters.longitude,
      "latitude": filters.latitude,
      "radius": filters.radius

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

  return (
    <div className="App">
      <FilterComponent filters={filters} setFilters={setFilters} onSearch={onSearch} />
      <MapComponent data={data} center={center} />
    </div>
  );
}

export default App;
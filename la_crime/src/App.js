import React, { useState } from 'react';
import FilterComponent from './components/FilterComponent';
import MapComponent from './components/MapComponent';

function App() {
  const [filters, setFilters] = useState({
    dateOccurred: '',
    areaName: '',
    crimeCode: '',
    violentLevel: '',
    latitude: -118.2695,
    longitude: 33.9825,
    radius: 10
  });

  const [data, setData] = useState([]);

  const onSearch = async () => {
    // Fetch data based on filters
    // For demonstration, we're just setting random data
    //const url = 'http://lacrimeexplorer-env.eba-mw97embs.us-west-1.elasticbeanstalk.com/search-crimes';
    const url = '/LACrimeAnalysisTool(2)/search-crimes'

    const querybody = {
      // longitude: filters.longitude,
      // latitude: filters.latitude,
      // radius: filters.radius
      "startDate": "2010-01-01",
      "endDate": "2023-01-01",
      "crimeCode": "900",
      "longitude": -118.2695,
      "latitude": 33.9825,
      "radius": 0.625

    };
    try {
      // Making a POST request with Fetch API
      //console.log(filters);
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
      // Update the state with the fetched data
      setData(result);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }

  };

  return (
    <div className="App">
      <FilterComponent filters={filters} setFilters={setFilters} onSearch={onSearch} />
      <MapComponent data={data} center={[filters.latitude, filters.longitude]} />
    </div>
  );
}

export default App;
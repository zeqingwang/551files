import React, { useState } from 'react';
import FilterComponent from './components/FilterComponent';
import MapComponent from './components/MapComponent';

function App() {
  const [filters, setFilters] = useState({
    dateOccurred: '2010',
    areaName: '',
    crimeCode: '',
    latitude: '',
    longitude: ''
  });
  const [data, setData] = useState([]);

  const onSearch = () => {
    // Fetch data based on filters
    // For demonstration, we're just setting random data
    setData([
      { latitude: parseFloat(filters.latitude) || 0, longitude: parseFloat(filters.longitude) || 0 }
    ]);
  };

  return (
    <div className="App">
      <FilterComponent filters={filters} setFilters={setFilters} onSearch={onSearch} />
      <MapComponent data={data} />
    </div>
  );
}

export default App;
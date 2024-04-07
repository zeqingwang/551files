import React from 'react';

function FilterComponent({ filters, setFilters, onSearch }) {
    const { dateOccurred, areaName, crimeCode, latitude, longitude } = filters;
    const areaNames = ['Area1', 'Area2']; // Example area names
    const crimeCodes = ['Code1', 'Code2']; // Example crime codes

    return (
        <div>
            <select value={dateOccurred} onChange={e => setFilters({ ...filters, dateOccurred: e.target.value })}>
                {[...Array(14)].map((_, i) => (
                    <option key={i} value={2010 + i}>{2010 + i}</option>
                ))}
            </select>

            <select value={areaName} onChange={e => setFilters({ ...filters, areaName: e.target.value })}>
                {areaNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>

            <select value={crimeCode} onChange={e => setFilters({ ...filters, crimeCode: e.target.value })}>
                {crimeCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                ))}
            </select>

            <input type="number" placeholder="Latitude" value={latitude} onChange={e => setFilters({ ...filters, latitude: e.target.value })} />
            <input type="number" placeholder="Longitude" value={longitude} onChange={e => setFilters({ ...filters, longitude: e.target.value })} />

            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default FilterComponent;
import React from 'react';

function FilterComponent({ filters, setFilters, onSearch }) {
    const { dateOccurred, areaName, crimeCode, violentLevel, latitude, longitude, radius } = filters;
    const areaNames = ['Area1', 'Area2']; // Example area names
    const crimeCodes = ['Code1', 'Code2']; // Example crime codes
    const violentLevels = ['violent', 'minor violent', 'other']; // Example crime codes
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
            <select value={violentLevel} onChange={e => setFilters({ ...filters, violentLevel: e.target.value })}>
                {violentLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                ))}
            </select>

            <input type="number" placeholder="Latitude" value={latitude} onChange={e => setFilters({ ...filters, latitude: parseFloat(e.target.value) })} />
            <input type="number" placeholder="Longitude" value={longitude} onChange={e => setFilters({ ...filters, longitude: parseFloat(e.target.value) })} />
            <input type="number" placeholder="Radius" value={radius} onChange={e => setFilters({ ...filters, radius: parseFloat(e.target.value) })} />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default FilterComponent;
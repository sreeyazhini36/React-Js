import React from 'react';

const FlightList = ({ onFlightSelect }) => {
  const flights = [
    { id: 1, name: 'Flight 101', departure: 'City A', destination: 'City B', price: 200 },
    { id: 2, name: 'Flight 202', departure: 'City B', destination: 'City C', price: 250 },
    // Add more flights as needed
  ];

  return (
    <div className="flight-list">
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id} onClick={() => onFlightSelect(flight)}>
            {flight.name} - ${flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;

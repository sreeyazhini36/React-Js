import React from 'react';

const FlightDetails = ({ flight, onCancel }) => {
  return (
    <div className="flight-details">
      <h2>Flight Details</h2>
      <p>Name: {flight.name}</p>
      <p>Departure: {flight.departure}</p>
      <p>Destination: {flight.destination}</p>
      <p>Price: ${flight.price}</p>
      <button onClick={onCancel}>Cancel Booking</button>
    </div>
  );
};

export default FlightDetails;

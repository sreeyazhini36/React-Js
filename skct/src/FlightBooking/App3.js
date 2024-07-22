import React, { useState } from 'react';
import FlightList from './FlightList';
import FlightDetails from './FlightDetails';
import BookingForm from './BookingForm';

const App3 = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  const handleBookingCancel = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="app">
      <h1>Flight Booking</h1>
      <FlightList onFlightSelect={handleFlightSelect} />
      {selectedFlight ? (
        <>
          <FlightDetails flight={selectedFlight} onCancel={handleBookingCancel} />
          <BookingForm flight={selectedFlight} />
        </>
      ) : null}
    </div>
  );
};

export default App3;

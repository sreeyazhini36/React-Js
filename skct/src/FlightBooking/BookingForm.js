import React, { useState } from 'react';

const BookingForm = ({ flight }) => {
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');

  const handleBookingSubmit = () => {
    // Implement booking logic (e.g., send data to a backend server)
    console.log(`Booking ${flight.name} for ${passengerName} (${passengerEmail})`);
    // You can add more sophisticated booking logic here

    // Reset form after submission
    setPassengerName('');
    setPassengerEmail('');
  };

  return (
    <div className="booking-form">
      <h2>Passenger Details</h2>
      <label>Name:</label>
      <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={passengerEmail} onChange={(e) => setPassengerEmail(e.target.value)} />
      <br />
      <button onClick={handleBookingSubmit}>Book Now</button>
    </div>
  );
};

export default BookingForm;

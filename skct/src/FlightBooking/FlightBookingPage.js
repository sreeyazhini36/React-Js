// FlightBookingPage.js

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import FlightList from './FlightList';
import FlightDetails from './FlightDetails';
import BookingForm from './BookingForm';

const FlightBookingPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Implement your booking logic here (e.g., API call)
    console.log('Booking submitted:', data);
  };

  const handleFlightSelect = (flight) => {
    // Handle flight selection logic
  };

  const handleBookingCancel = () => {
    // Handle booking cancellation logic
  };

  return (
    <div className="flight-booking-page">
      <h1>Flight Booking</h1>

      <div className="flight-booking-container">
        <FlightList onFlightSelect={handleFlightSelect} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="booking-section">
            <FlightDetails />
          </div>
          <div className="booking-section">
            <Controller
              name="passengerName"
              control={control}
              rules={{ required: 'Passenger Name is required' }}
              render={({ field }) => (
                <>
                  <label htmlFor="passengerName">Passenger Name:</label>
                  <input type="text" id="passengerName" {...field} />
                  <span className="error">{errors.passengerName && errors.passengerName.message}</span>
                </>
              )}
            />
            <Controller
              name="passengerEmail"
              control={control}
              rules={{
                required: 'Passenger Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <>
                  <label htmlFor="passengerEmail">Passenger Email:</label>
                  <input type="text" id="passengerEmail" {...field} />
                  <span className="error">{errors.passengerEmail && errors.passengerEmail.message}</span>
                </>
              )}
            />
            <button type="submit">Book Now</button>
            <button type="button" onClick={handleBookingCancel}>
              Cancel Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingPage;

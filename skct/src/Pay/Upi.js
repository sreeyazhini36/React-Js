import React, { useState } from 'react';
import './Upi.css';

const UpiPaymentDetailsPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi'); // Default to UPI
  const [accountDetails, setAccountDetails] = useState('');

  const handlePayment = () => {
    // Implement your payment processing logic here
    // This may include integrating with a payment gateway
    // and handling the response accordingly

    if (paymentMethod === 'upi') {
      console.log(`Initiating UPI payment for UPI ID: ${accountDetails}`);
      // Add logic to interact with UPI payment gateway
    } else if (paymentMethod === 'netbanking') {
      console.log(`Initiating Net Banking payment for account: ${accountDetails}`);
      // Add logic to interact with Net Banking payment gateway
    }

    // Display an alert after processing
    window.alert('Payment submitted successfully!');
  };

  return (
    <div className="payment-details-container">
      <header className="header">
        <h1>Payment Details</h1>
      </header>

      <main className="main-content">
        <section className="payment-section">
          <h2>Payment Information</h2>
          <p>Please enter your payment details to proceed.</p>
          <form className="payment-form" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
            <label htmlFor="paymentMethod">Select Payment Method:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
            </select>

            <label htmlFor="accountDetails">UPI ID / Account Details:</label>
            <input
              type="text"
              id="accountDetails"
              name="accountDetails"
              value={accountDetails}
              onChange={(e) => setAccountDetails(e.target.value)}
              required
            />

            <button type="submit">Submit Payment</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© All Rights Reserved 2023 - 2024. SKCT</p>
      </footer>
    </div>
  );
};

export default UpiPaymentDetailsPage;

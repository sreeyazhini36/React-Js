import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18

// Import additional components or styles you might have
// import './styles.css';
// import OtherComponent from './OtherComponent';

import App2 from './BlogEditor/App2'; // Import your main App component
import FlightBookingPage from './FlightBooking/FlightBookingPage';
import App3 from './FlightBooking/App3';
import Pay from './Pay/Pay'
import Card1 from './Card/Card1';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Optional error handling for rendering (uncomment if needed)
// try {
root.render(
  <React.StrictMode>
    <Card1/>
  </React.StrictMode>
);
// } catch (error) {
//   console.error('Error rendering app:', error);
// }

// If you want to support browsers without a modern Promise implementation, you can install a polyfill: https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js*/
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
/*import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Reducer';
import MainComp from './Redux/MainComp';
import reportWebVitals from './reportWebVitals';
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
   <Provider store={store}>
    <MainComp />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


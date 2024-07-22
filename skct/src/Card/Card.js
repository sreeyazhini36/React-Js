import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import "./Card.css";
import im from "../Images/Card.jpeg";

const Card2 = () => {
  const [backgroundImage, setBackgroundImage] = useState(im);
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBackgroundImage("https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    textAlign: 'center',
    marginTop: '-35px',
     // Center content horizontally
  };
  const searchContainerStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    zIndex: '1', // Ensure it's above other elements
  };

  const toggleAdditionalCards = () => {
    setShowAdditionalCards(!showAdditionalCards);
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e5d73d', // Yellow color
    color: '#fff', // White text
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <body style={containerStyle}>
      
      <h1 className="stylish-font">NEW YORK</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={searchContainerStyle}>
      <TextField
        label="Search"
        variant="outlined"
        
        autoFocus // Automatically focus on the search bar
        sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '20px' }}
      />
      </div>
       
       
       
       
  

      



      <div className="card-container">
        <div className="travel-card">
          <img src="https://lh3.googleusercontent.com/p/AF1QipNruAtNsjxJ6ldL6G10S9DC7vRiFQsrz-Gh4YOT=s1360-w1360-h1020" alt="Reykjavik" style={{ width: '100%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">Statue Of Liberty</h3>
            <p className="card-description">“The Statue of Liberty is a colossal neoclassical sculpture ".</p>
            <a href="#" className="card-btn">Learn More</a>
          </div>
        </div>

        <div className="travel-card">
          <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/241000/241007-Brooklyn-Bridge.jpg" alt="Great Wall of China" style={{ width: '100%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">Brooklyn Bridge</h3>
            <p className="card-description">“The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City".</p>
            <a href="#" className="card-btn">Learn More</a>
          </div>
        </div>

        {showAdditionalCards && (
          <>
            {/* Additional Cards */}
            <div className="travel-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg" alt="Great Wall of China" style={{ width: '100%', height: 'auto'}}></img>
              <div className="card-details">
                <h3 className="card-title">Times Square</h3>
                <p className="card-description">“Times Square is a major commercial intersection, tourist destination, entertainment hub".</p>
                <a href="#" className="card-btn">Learn More</a>
              </div>
            </div>
            
            <div className="travel-card">
              <img src="https://a.cdn-hotels.com/gdcs/production176/d304/45e7e95a-6f5d-4f19-9479-1d3ddfee7e99.jpg" alt="Great Wall of China" style={{ width: '100%', height: 'auto'}}></img>
              <div className="card-details">
                <h3 className="card-title">The Empire State Building</h3>
                <p className="card-description">“The Empire State Building is a 102-story skyscraper".</p>
                <a href="#" className="card-btn">Learn More</a>
              </div>
            </div>
          </>
        )}

        <div className="centered-button-container horizontal-center">
          <button style={buttonStyle} onClick={toggleAdditionalCards}>
            {showAdditionalCards ? 'See Less' : 'See More'}
          </button>
        </div>
      </div>
    </body>
  );
}

export default Card2;
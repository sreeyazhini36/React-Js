import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, CircularProgress } from '@mui/material';
import "./Card.css";
import im from "../images/Card.jpeg";

const Card1 = () => {
  const [backgroundImage, setBackgroundImage] = useState(im);
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);
  const [loading, setLoading] = useState(false);

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
    marginTop: '-1px',
    transition: 'background-image 0.5s ease',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e5d73d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const searchContainerStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    zIndex: '1',
  };

  const toggleAdditionalCards = () => {
    setLoading(true);

    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setShowAdditionalCards(!showAdditionalCards);
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  };


    // Make a POST request to your server API
   

  return (
    <body style={containerStyle}>
      <h1 className="stylish-font">CHINA</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={searchContainerStyle}>
        <TextField
          label="Search"
          variant="outlined"
          autoFocus
          sx={{ backgroundColor: 'white', borderRadius: '5px', marginBottom: '20px' }}
        />
      </div>

      <div className="card-container">
        <div className="travel-card">
          <img src="https://content.r9cdn.net/rimg/dimg/62/28/22c46ab3-city-3286-164709113b2.jpg?crop=true&width=1020&height=498" alt="Reykjavik" style={{ width: '100%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">Beijing</h3>
            <p className="card-description">Beijing is a global city and one of the world's leading centres for culture, diplomacy, politics, finance, business and economics, education</p>
            <a href="/more" className="card-btn">Learn More</a>
          </div>
        </div>

        <div className="travel-card">
          <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31124623/Great-Wall-Of-China-1600x900.jpg" alt="Great Wall of China" style={{ width: '100%', height: '50%'}}></img>
          <div className="card-details">
            <h3 className="card-title">Great Wall OF China</h3>
            <p className="card-description">The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China </p>
            <a href="#" className="card-btn">Learn More</a>
          </div>
        </div>

        {showAdditionalCards && (
          <>
            {/* Additional Cards */}
            <div className="travel-card">
              <img src="https://images.chinahighlights.com/allpicture/2016/04/f128ae8169c042248844fcf6_cut_800x500_311.jpg" alt="Great Wall of China" style={{ width: '100%', height: 'auto'}}></img>
              <div className="card-details">
                <h3 className="card-title">Guilin</h3>
                <p className="card-description">Guilin is most famous for its iconic limestone mountains and caves, which are truly unique in the world.</p>
                <a href="#" className="card-btn">Learn More</a>
              </div>
            </div>
            <div className="travel-card">
              {/* ... (additional card code) */}
              <img src="https://cdn.britannica.com/19/94119-050-DC0E0606/Lanterns-flags-Xian-city-wall-China-Shaanxi.jpg" alt="Great Wall of China" style={{ width: '100%', height: 'auto'}}></img>
              <div className="card-details">
                <h3 className="card-title">Xi An</h3>
                <p className="card-description">A subprovincial city on the Guanzhong Plain, the city is the third most populous city in Western China</p>
                <a href="#" className="card-btn">Learn More</a>
              </div>
            </div>
          </>
        )}

        <div className="centered-button-container horizontal-center">
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <>
              <button style={buttonStyle} onClick={toggleAdditionalCards}>
                {showAdditionalCards ? 'See Less' : 'See More'}
              </button>
              
            </>
          )}
        </div>
      </div>
    </body>
  );
}

export default Card1;
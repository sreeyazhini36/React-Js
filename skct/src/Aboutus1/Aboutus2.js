import React, { useContext } from 'react';
import MyContext2 from './MyContext2';
import img1 from '../images/blog image for about.jpg';
import './Aboutus2.css'

const Aboutus2 = () => {
  const contextValue = useContext(MyContext2);

  return (
    <div className="flex">
      <img className="img" src={img1} alt="Description" />
      <div className="para">
        <h1>{`WELCOME TO ${contextValue.appName}!!`}</h1>
        <h2>WHO WE ARE:</h2>
        <p >Hello fellow wanderers and food enthusiasts! We are <b>"TRENDTELLER"</b>, 
            the creators and adventurers behind TRENDTELLER.
             Our passion for travel and love for discovering delectable cuisines inspired us to share our experiences with the world.</p>
        <button class="button">Back</button>
      </div>
    </div>
  );
};

export default Aboutus2;

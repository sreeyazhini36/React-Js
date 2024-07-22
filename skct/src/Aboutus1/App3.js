// In your App.js or index.js
import React from 'react';
import MyContext2 from './MyContext2';
import Aboutus2 from './Aboutus2';

const App3 = () => {
  const contextValue = {
    // Define your context data here
    appName: 'TRENDTELLER',
  };

  return (
    <MyContext2.Provider value={contextValue}>
      {/* Your other components go here */}
      <Aboutus2 />
    </MyContext2.Provider>
  );
};

export default App3;

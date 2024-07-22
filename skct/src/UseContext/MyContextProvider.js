import React, {useState} from 'react';
import MyContext from './MyContext';


const MyContextProvider = ({children}) => {
    const[myValue,setMyValue]=useState('Default Value');
  
  return (
    <MyContext.Provider value={{myValue,setMyValue}}>
        {children}
        </MyContext.Provider>
  )
}

export default MyContextProvider
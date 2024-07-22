import React,{useContext,useState} from 'react'
import MyContext from './MyContext'

const ComponentA1 = () => {
    const {myValue,setMyValue}=useContext(MyContext);
    const changefunc =()=>{
        setMyValue("New Value")
    }
    const [color ,setMyColor]=useState("blue");
    const changecolor=()=>{
      setMyColor("green")
    }
  return (
    <div style={{background:color}}>
        <p>Value from context: {myValue}</p>
        <button onClick={changefunc}>ChangeValue</button>
        <button onClick={changecolor}>Changecolor</button>
    </div>

  )
}

export default ComponentA1
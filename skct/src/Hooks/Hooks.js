import React,{useState} from 'react'
import Hooks3 from './Hooks3';

 const Hooks = () => {
    const[count,setCount]=useState(19);
    const[input,setInput]=useState()
    const increment=()=>{
        setCount(count+1)
    }
    const handlechange=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div>
        <h1>signup</h1>
        <label>uname:</label>
        <input></input>
        <label>AGE</label>
        
        <button onClick={increment}>+</button>
        <input onChange={handlechange}></input>
        <h1>{input}</h1>
        <Hooks3 data={input}/>
    </div>
  )
}
export default Hooks
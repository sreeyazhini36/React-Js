import React,{useState} from 'react'

const Counter3 = () => {
    const[data,setdata]=useState(0)
    const handleplus=()=>{
      setdata(data+1)
    }
    const handleminus=()=>{
     setdata(data-1)
    }
  return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={handleplus}>increment</button>
        <h1>{data}</h1>
        <button onClick={handleminus}>decrement</button>
    </div>
  )
}

export default Counter3
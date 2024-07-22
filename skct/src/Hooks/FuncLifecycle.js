import React,{useEffect} from 'react'

const FuncLifecycle = (props) => {
  useEffect(() => {
    console.log("mounted====>>>>>")   
       return(()=>{
        
       })
   },[props] );
  return (
    <div><h1>useEffect</h1></div>
  )
}

export default FuncLifecycle
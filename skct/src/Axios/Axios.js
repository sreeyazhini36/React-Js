import React,{useState} from 'react'
import axios from 'axios'
const Axios = () => {
    const[apidata,setApidate]=useState()
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        setApidate(response.data[0].name)
        console.log("response=======>>>>>>>>",response);
    })

  return (
    <div>
        <h1>Axios</h1>
        <h1>{apidata}</h1>
        </div>
  )
}

export default Axios
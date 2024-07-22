import React,{useState} from 'react'
import axios from 'axios'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Loader = () => {
    const[apidata,setApidate]=useState();
    const[spin,setSpin]=useState(false);
    const handleload=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        setSpin(false)
        setApidate(response.data[0].phone)
        console.log("response=======>>>>>>>>",response);
    })
    setSpin(false)
}
  return (
    <div>
        { spin &&
        <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
        <button onClick={handleload}>Get</button>
<h1>{apidata}</h1>

    </div>
  )
}

export default Loader
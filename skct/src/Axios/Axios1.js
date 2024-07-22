import React,{useState} from 'react'
import axios from 'axios'
const Axios1 = () => {
    const[apidata,setApidate]=useState()
    const[apidata1,setApidate1]=useState()
    const[apidata2,setApidate2]=useState()
    const[apidata3,setApidate3]=useState()
    const[apidata4,setApidate4]=useState()
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(response=>{
        setApidate(response.data[7].name)
        setApidate1(response.data[7].body)
        setApidate2(response.data[7].id)
        setApidate3(response.data[7].postId)
        setApidate4(response.data[7].email)
        
        console.log("response=======>>>>>>>>",response);
    })
  return (
    <div>
        <h1>hello!</h1>
        <h1>Name: {apidata}</h1>
        
        <h1>id:{apidata2}</h1>
        <h1>postId:{apidata3}</h1>
        <h1>email:{apidata4}</h1>
        <h1>body:{apidata1}</h1>
    </div>
  )
}

export default Axios1
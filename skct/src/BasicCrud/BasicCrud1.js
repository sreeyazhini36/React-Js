import React,{useEffect,useState} from 'react'
import axios from 'axios';
const BasicCrud1 = () => {
    const[tododata1,settoDodata1]=useState([]);
    const [inputvalue,setInputvalue]=useState();
    useEffect(()=>{
    

      axios.get('https://jsonplaceholder.typicode.com/posts')
        
.then(response=>{
    console.log("tododata1===>>>",response.data)
settoDodata1(response.data)
})
    },[]);
    const handleinput=(e)=>{
setInputvalue(e.target.value);
    }
    const handleclick = ()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",{title:inputvalue})
        .then(response=>{
            console.log("added====>>>>>",response.data)
settoDodata1([...tododata1,response.data])
setInputvalue("")
    })
}
const  handledelete=(id)=>{
axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
settoDodata1(tododata1.filter(task=>task.id!==id));
};
  return (
    <div>
        <h1>Crud</h1>
        <input onChange={handleinput}value={inputvalue}></input>
        <button onClick={handleclick}>add</button>
        {
           tododata1 && tododata1.map(index=>(
            <>
                <p key={index.id} >{index.title}</p>
                <button>Update</button>
                <button onClick ={()=>handledelete (index.id)}>Delete</button>
                </>
            ))
        }

    </div>
  )
}

export default BasicCrud1
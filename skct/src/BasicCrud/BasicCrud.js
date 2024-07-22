import React,{useEffect,useState} from 'react'
import axios from 'axios';
const BasicCrud = () => {
    const[tododata1,settoDodata1]=useState([]);
const[inputvalue,setInputvalue]=useState([]);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
        try{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response=>{
            console.log("tododata1---------->>>>>>",response.data)
            settoDodata1(response.data)
        })
    }catch(error){
            console.log("error----------->>>>",error)
        setError(error.message||"An error occurred while fetching data.");}
        finally{
            setLoading(false)
        }}
        fetchData();
    },[])
    
    const handleinput=(e)=>{
        setInputvalue(e.target.value);
    }
    const handleclick=()=>{
        axios.post("https://jsonplaceholder.typicode.com/todos",{title:inputvalue})
    
        .then(response=>{
            console.log("added==========>>>>>>",response.data)
            settoDodata1([...tododata1,response.data])
           
            setInputvalue("")
        })
    }
    const handleDeleteTask=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        settoDodata1(tododata1.filter(task => task.id !== id));

    }

  return (
    <div>
         {
            error&&(
                <p style={{color:"red",fontsize:"16px",fontweight:"bold"}}>
                    you have an error:{error}
                </p>
            )
        }
        {
            loading&&(
                <div style={{color:"blue",fontsize:"14px"}}>
                    <p>
                        your async is making your task awaited,and he is doing some other
                    </p>
            )
        }
        
        <h1>Basic Crud</h1>
        
        <input onChange={handleinput} value={inputvalue}></input>
        <button onClick={handleclick}>Add</button>{
        tododata1.map(index=>{
                return (
                    <>
                        <p key={index.id}>{index.title}</p>
                        <button>Update</button>
                        <button onClick={() => handleDeleteTask(index.id)}>Delete</button></>
                );
            })
        }
    </div>
  )
}

export default BasicCrud
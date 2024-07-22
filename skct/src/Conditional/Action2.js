import React ,{useState}from 'react'

const Action2 = () => {
    const[user,setUser]=useState("student")
    const handlelogout =()=>{

        setUser("")
    }
    const handlelogin =()=>{
        setUser("student")
    }
  return (
    <div>
       {user ?
         <h1>Welcome {user}!!!</h1>:
        <h1>New User please login into continue....</h1>
       }
        <button onClick={handlelogout}>logout</button>
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Action2
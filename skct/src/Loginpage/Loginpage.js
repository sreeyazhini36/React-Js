import React from 'react';
import img1 from "../images/skct dev image.jpg";
import { useNavigate } from 'react-router-dom';


const Loginpage = () => {
  
  console.log("login----->>>>>")
  const handlechange=(e)=>
  console.log(e.target.value)
  
    const navigate=useNavigate()
    const handliclick = () =>{
      alert("form submitted successfully") 
      navigate("/Home")
    }
    const handleback = ()=>{
    navigate("/Signup")
    }
  return (
    <div>
        <h1>Welcome to SKCT</h1>
      <img src={img1}></img>
      <br></br>
      
      <a href="https://www.skct.edu.in/#/">click here!</a>
      <h1>Login Form</h1>
      <form>
         <label>Username :</label>
         <input onChange={handlechange}></input><br></br>
         <label>Password :</label>
         <input></input>
      </form>
      <button onClick={handliclick}>Submit</button>
      <button onClick={handleback}>Back</button>
    </div>
  )
}

export default Loginpage
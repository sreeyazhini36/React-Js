import React,{useState} from 'react'

const Action1 = () => {
    const[islogged,setIslogged]=useState(true)
    if(true) {

    }
    else{
        
    }
    const handleopen=()=>{
        setIslogged(false)
    }
    const handleclose=()=>{
        setIslogged(true)
    }
  return (
    <div>
<h1>this is an if statement</h1>
{islogged &&
<form>
    <label>username:</label>
    <input></input>
    <label>passsword:</label>
    <input></input>
</form>
}
<button onClick={handleopen}>close</button>
<button onClick={handleclose}>open</button>
    </div>
  )
}

export default Action1
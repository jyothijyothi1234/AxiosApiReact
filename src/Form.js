import React, { useState } from "react";


function Attrib(){

const[data,setData]=useState({username:"",password:""})

const {username,password} =data

  const OnHandler=(e)=>setData({...data,[e.target.name]:[e.target.value]})
  const  OnForm=(e)=>{
    e.preventDefault();
    console.log(data)
  }

  return(

    <div>

      <form   onSubmit={OnForm}>
      <input  type="text"  name="username" onChange={OnHandler}  value={username}/>
      <input  type="password"  name="password" onChange={OnHandler}  value={password}/>
      <input  type="submit" name="submit" />
      </form>
    </div>
  );
}


export default  Attrib;
    
     
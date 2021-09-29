import React, { useState } from "react";
import "./register.css";
import Axios from "axios";
// import man from "/images/Profile";
function Register() {
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const submit =()=>{
        
        Axios.post("http://localhost:3001/api/insert",{
        email:email, 
        phone:phone,
        uname:name,
        password:password,})
        .then(()=>{
           alert("Data insert successfully,please Check your databases") ;
           
        });
    }

  return (
    <div className="main-reg-container">
      <div className="reg-img">
        <img
          src="/images/Profile.png"
          alt="Shoe-logo"
          width="150"
          height="150"
        />
      </div>
      <form className="form-container">
        <input type="email" placeholder="Enter your Email-Id" name="email"
         onChange={(e)=>setEmail(e.target.value)} />
        <input
          type="text"
          placeholder="Enter your Mobile No."
          name="mobileno"
          onChange={(e)=>setPhone(e.target.value)}
        />
        <input type="text" placeholder="Enter your username" name="username" 
         onChange={(e)=>setName(e.target.value)}/>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          max="8"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={submit}>Register</button>
      </form>
    </div>
  );
}

export default Register;

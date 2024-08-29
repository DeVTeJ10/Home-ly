import React, { useState } from 'react';
import axios from 'axios';
import logoImg from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./signup.css"



const SignUp = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {firstname, lastname, username, email, mobile, address, password}

        axios.post("https://finaki-backend.onrender.com/api/v1/auth/register", user)
        .then(response => {
          console.log("data sent succesfully:", response)
        })
        .catch(error => {
          console.log("error sending data:", error)
        })
    }

  return (

    <div>
      <div className='sisenor'>
      <div className='container-signup'>
      <div className='signup-container'>
        <Link to="/">
        <img src={logoImg} alt="Logo" />
        </Link>
        <h1 className='anticipates'>Anticipate Your Dream Home</h1>

      <form onSubmit={handleSubmit} >
        <input type="text" 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)} 
                placeholder="First Name" className='signup-input'
                id='firstname'/>

        <input type="text" 
                value={lastname}
                onChange={(e) => setLastname(e.target.value)} 
                placeholder="Last Name" className='signup-input'
                id='lastname'/>

        <input type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" className='signup-input'
                id='text'/>

        <input type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email' className='signup-input'
                id='country'/>

        <input type='number' 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
                placeholder='Phone Number' className='signup-input'
                id='phone'/>

        <input type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Address' className='signup-input'
                id='address'/>

        <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" className='signup-input'
                id='password'/>

        <button className='signup-button' type='submit'>Sign Up</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
import React, { useState } from 'react';
import axios from 'axios';
import logoImg from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./signup.css"



const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {username, email, country, phoneNumber, password}

        axios.post("https://finaki-backend.onrender.com/api/v1/auth/register")
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
      <form onSubmit={handleSubmit}>
        <input type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" className='signup-input'
                id='username'/>

        <input type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" className='signup-input'
                id='email'/>

        <input type='text' 
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
                placeholder='Country' className='signup-input'
                id='country'/>

        <input type='number' 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                placeholder='Phone Number' className='signup-input'
                id='phoneNumber'/>

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
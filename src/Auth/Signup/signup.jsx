import React, { useState } from 'react';
import axios from 'axios';
import logoImg from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./signup.css"



const SignUp = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, username, email, phone, country, password };

        axios.post("https://finaki-backend.onrender.com/api/v1/auth/register", user)
            .then(response => {
                console.log("data sent successfully:", response.data);
                setSuccess(response.data.message);
                setError(""); // Clear any previous error messages
            })
            .catch(error => {
                console.error("error sending data", error.response ? error.response.data : error);
                setError(error.response ? error.response.data.message : "An unexpected error occurred.");
                setSuccess(""); // Clear any previous success messages
            });
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

      <form onSubmit={handleSubmit} autoComplete='on'>
        <input type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name" className='signup-input'
                id='name'
                name='name'/>

        <input type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" className='signup-input'
                id='username'
                name='username'/>

        <input type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" className='signup-input'
                id='email'
                name='email'/>

        <input type='tel' 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder='Phone Number' className='signup-input'
                id='phone'
                name='phone'/>

        <input type='text'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder='Country' className='signup-input'
                id='country'
                name='country'/>

        <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" className='signup-input'
                id='password'
                name='password'/>

        <button className='signup-button' type='submit'>Sign Up</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
import React, { useState } from 'react';
import axios from "axios";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {username, password}

    axios.post("https://finaki-backend.onrender.com/api/v1/auth/login", users)
    .then(response => {
      console.log("data sent succesfully:", response)
    })
    .catch(error => {
      console.log("error sending data:", error)
    })
  }

  return (

    <div>
      <div className='login-container'>
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
        <h1 className='welcome-back'>Welcome Back</h1>

        <form onSubmit={handleSubmit} autoComplete='on'>
        <input type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username" 
              className='login-input'
              id='username'/>

        <input type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" 
              className='login-input'
              id='password'/>

        <button className='login-button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
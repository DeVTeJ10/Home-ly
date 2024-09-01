import React, { useState } from 'react';
import axios from "axios";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successfull, setSuccessfull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = { email, password };

    axios.post("https://finaki-backend.onrender.com/api/v1/auth/login", users)
      .then(response => {
        console.log("data sent successfully:", response);
        setSuccessfull(response.data.message); // Set success message
        setError(""); // Clear any previous error messages
      })
      .catch(error => {
        console.error("error sending data", error.response ? error.response.data : error);
        setError(error.response ? error.response.data.message : "An unexpected error occurred."); // Set error message
        setSuccessfull(""); // Clear any previous success messages
      });

  }

  // const fetchData = async() =>{
  //   try{
  //     const response = await axios.get ('')
  //   }
  // }

  return (
    <div>
      <div className='login-container'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h1 className='welcome-back'>Welcome Back</h1>

        {error && <p className="error">{error}</p>} {/* Display error message */}
        {successfull && <p className="success">{successfull}</p>} {/* Display success message */}

        <form onSubmit={handleSubmit} autoComplete='on'>
          <input type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" 
                className='login-input'
                id='Email'
                name='Email'/>

          <input type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className='login-input'
                id='password'
                name='password'/>

          <button className='login-button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
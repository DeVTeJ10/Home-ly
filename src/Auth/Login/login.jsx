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

        // Define getData inside handleSubmit for easy flow of data
        const getData = () => {
          axios.get("https://finaki-backend.onrender.com/api/v1/user/668d4f7cde02087694aa1c16") // Adjust the URL as needed
            .then(response => {
              console.log("data successfully gotten:", response.data);
              // Handle the fetched data as needed
              setSuccessfull(response.data.message);
              setError(""); // Clear any previous error messages
            })
            .catch(error => {
              console.error("error getting data", error);
              const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
              setError(errorMessage);
              setSuccessfull(""); // Clear any previous success messages
            });
        }

        // Call getData after successful login
        getData();
      })
      .catch(error => {
        const message = error.response?.data?.message || 
                        (error.request ? "No response from server. Check your network." 
                                       : "Unexpected error occurred.");
        console.error("Error:", message);
        setError(message);
        setSuccessfull(""); // Clear any previous successful messages
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
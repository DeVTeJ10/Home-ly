import React, { useEffect, useState } from 'react';
import axios from "axios";
import logo from "../../images/Logo.png";
import { json, Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";


const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const savedDataForm = JSON.parse(localStorage.getItem('dataform'));
    if (savedDataForm && savedDataForm.email) {
      setLoginForm(prevState => ({
        ...prevState,
        email: savedDataForm.email
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;

    axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/login", { email, password })
      .then(response => {
        console.log("data sent successfully:", response);
        setSuccessful(response.data.message);
        setError("");

        if (response?.data?.user?.token) {
          localStorage.setItem('authToken', response?.data?.user?.token);
          console.log('Login successful, token stored', response.data.token);
          navigate('/')
        }

      })
      .catch(error => {
        const message = error.response?.data?.message ||
          (error.request ? "No response from server. Check your network."
            : "Unexpected error occurred.");
        console.error("Error:", message);
        setError(message);
        setSuccessful("");
      });
  }

  return (
    <div>
      <div className='login-container'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h1 className='welcome-back'>Welcome Back</h1>

        {error && <p className="error">{error}</p>}
        {successful && <p className="success">{successful}</p>}

        <form onSubmit={handleSubmit} autoComplete='on'>
          <input
            type="email"
            value={loginForm.email}
            onChange={handleChange}
            placeholder="Email"
            className='login-input'
            id='email'
            name='email'
          />

          <input
            type="password"
            value={loginForm.password}
            onChange={handleChange}
            placeholder="Password"
            className='login-input'
            id='password'
            name='password'
          />
            <button className='login-button' type='submit'>Login</button>
            <Link to={"/forgot-password"}>
             <h3 className='forgotpassword'>Forgot Password?</h3>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
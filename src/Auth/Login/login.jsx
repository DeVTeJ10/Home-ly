import React from 'react';
import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div>
      <div className='login-container'>
        <Link to="/">
        <img src={logoImg} alt="Logo" />
        </Link>
        <h1 className='welcome-back'>Welcome Back</h1>
        <input type="email" placeholder="Email" className='login-input'/>
        <input type="password" placeholder="Password" className='login-input'/>
        <button className='login-button'>Login</button>
      </div>
    </div>
  );
};

export default Login;
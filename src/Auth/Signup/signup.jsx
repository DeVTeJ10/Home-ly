import React from 'react';
import logoImg from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./signup.css"

const SignUp = () => {
  return (
    <div>
      <div className='sisenor'>
      <div className='container-signup'>
      <div className='signup-container'>
        <Link to="/">
        <img src={logoImg} alt="Logo" />
        </Link>
        <h1 className='anticipates'>Anticipate Your Dream Home</h1>
        <input type="text" placeholder="Username" className='signup-input'/>
        <input type="email" placeholder="Email" className='signup-input'/>
        <input type='text' placeholder='Country' className='signup-input'/>
        <input type='number' placeholder='Phone Number' className='signup-input'/>
        <input type="password" placeholder="Password" className='signup-input'/>
        <input type="password" placeholder="Confirm Password" className='signup-input'/>
        <button className='signup-button'>Sign Up</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
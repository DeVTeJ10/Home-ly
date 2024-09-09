import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png"

const resetPassword = () => {







  
  return (
    <div>
      <div className='login-container'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 className='welcome-back'>Please Input Matching Passwords</h3>

        

        {/* <form onSubmit={handleSubmit} autoComplete='on'> */}
          <input
            type="email"
            // value={loginForm.email}
            // onChange={handleChange}
            placeholder="Password"
            className='login-input'
            id='email'
            name='email'
          />

          <input
            type="password"
            // value={loginForm.password}
            // onChange={handleChange}
            placeholder="Confirm Password"
            className='login-input'
            id='password'
            name='password'
          />
            <button className='login-button' type='submit'>Login</button>

        {/* </form> */}
      </div>
    </div>
  );
};

export default resetPassword;
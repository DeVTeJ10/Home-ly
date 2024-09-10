import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png"

const resetPassword = () => {

  const urlParams = new URLSearchParams (window.location.search);
  const token = urlParams.get('token');


  const [resetPassword, setResetPassword] = useState({
    password: '',
});


    const handleSubmit = (e) => {
        axios.put("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/reset-password/2ad429ca81675a27f59be21e58268d4569652fe9e59ca6c79cc92c97863b5d59", password)
        .then(response => {
          console.log("password updated succesfully:", response.data )
        })
    }



  return (
    <div>
      <div className='login-container'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 className='welcome-back'>Please Input Matching Passwords</h3>

        

        <form onSubmit={handleSubmit} autoComplete='on'>
          <input
            type="password"
            // value={loginForm.email}
            // onChange={handleChange}
            placeholder="Password"
            className='login-input'
            id='password'
            name='password'
          />
            <button className='login-button' type='submit'>Login</button>

        </form>
      </div>
    </div>
  );
};

export default resetPassword;
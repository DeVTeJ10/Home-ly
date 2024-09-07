import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png";
import "./forgotPassword.css"


const forgotPassword = () => {

  const [email, setEmail] = useState({
    email: ''
  });

  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");
  const navigate = useNavigate()



        const handleSubmit = (e) => {
          e.preventDefault()

          axios.post("https://finaki-backend.onrender.com/api/v1/auth/forgot-password-token", email)
            .then(response => {
              console.log("data sent succesfully", response.data)
            }
          )
        }



  return (
    <div>
      <div className='login-container'>

      <Link to ={"/"}>
        <img src={logo} />
      </Link>
        <h3 className='forgotpassword'> Reset Your Password </h3>
        <form  autoComplete='on'>
          <input
            type="email"
            // value={loginForm}
            // onChange={handleChange}
            placeholder="Input Email"
            className='login-input'
            id='email'
            name='email'
          />
          {/* <Link to={"/reset-password"}> */}
            <button className='login-button' type='submit'>Submit Email</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default forgotPassword;
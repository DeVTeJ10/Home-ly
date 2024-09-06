import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png";
import "./forgotPassword.css"


const forgotPassword = () => {

  // const [email, setEmail] = useState({
  //   email: ''
  // });

  // const [error, setError] = useState("");
  // const [successful, setSuccessful] = useState("");
  // const navigate = useNavigate()



    // const handleSubmit = (e) =>{
    //   e.preventDefault();
    //   const {passwordEmail} = email

    //   axios.post("")
    // }



  return (
    <div>
      <div className='login-container'>

      <Link to ={"/"}>

        <img src={logo} />

      </Link>
        <h2 className='forgotpassword'>Please Enter Your Email</h2>
        {/* <form onSubmit={handleSubmit} autoComplete='on'> */}
          <input
            type="email"
            // value={loginForm}
            // onChange={handleChange}
            placeholder="Input Email"
            className='login-input'
            id='email'
            name='email'
          />
          <Link to={"/reset-password"}>
            <button className='login-button' type='submit'>Submit Email</button>
          </Link>
        {/* </form> */}
      </div>
    </div>
  );
};

export default forgotPassword;
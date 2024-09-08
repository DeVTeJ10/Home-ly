import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png";
import "./forgotPassword.css"


const forgotPassword = () => {

  const [forgotpassword, setForgotpassword] = useState({
    email: ''
  });

  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");
  // const navigate = useNavigate()



    const handleChange = (e) =>{
      const {name, value} = e.target
      setForgotpassword(prevState => ({ ...prevState, [name]: value }));
    }

        const handleSubmit = (e) => {
          e.preventDefault()

          axios.post("https://finaki-backend.onrender.com/api/v1/auth/forgot-password-token", {forgotpassword})
            .then(response => {
              console.log("data sent succesfully", response.data)
              setForgotpassword({ ...forgotpassword, success: response.data.message, error: "" })
              // const resetprogress = successful.response?.data?.message || "Link sent succesfullly"
            })
            .catch(error => {
              console.error("error sending data", error);
              const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
              setForgotpassword({ ...forgotpassword, error: errorMessage, success: "" });
          });
  };
        



  return (
    <div>
      <div className='login-container'>

      <Link to ={"/"}>
        <img src={logo} />
      </Link>
        <h3 className='forgotpassword'> Reset Your Password </h3>
        <form  onSubmit={handleSubmit} autoComplete='on'>
          <input
            type="email"
            value={forgotpassword.email}
            onChange={handleChange}
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
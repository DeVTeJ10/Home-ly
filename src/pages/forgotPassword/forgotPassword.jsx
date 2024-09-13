import  { useState, } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png";
import "./forgotPassword.css"


const ForgotPassword = () => {

  const [ForgotPassword, setForgotpassword] = useState({
    email: ''
  });

  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");



    const handleChange = (e) =>{
      const {name, value} = e.target
      setForgotpassword(prevState => ({ ...prevState, [name]: value }));
    }

        const handleSubmit =  (e) => {
          e.preventDefault()
          // const { email } = ForgotPassword;

           axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/forgot-password-token", { email: ForgotPassword.email })
            .then(response => {
              console.log("password reset link sent succesfully", response.data)
              setSuccessful(response.data.message)
              setForgotpassword({ ...ForgotPassword, success: response.data.message, error: "" })
              setError("")

              

              if (response?.data?.user?.email) {
              console.log('Password reset succesful', response.data.email);
          }
            })
            .catch(error => {
              console.error("error sending data", error);
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

        {successful && <p className="success-message">{successful}</p>}
        {error && <p className="error-message">{error}</p>}

          <input
            type="email"
            value={ForgotPassword.email}
            onChange={handleChange}
            placeholder="Input Email"
            className='login-input'
            id='email'
            name='email'
          />
            <button className='login-button' type='submit'>Submit Email</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
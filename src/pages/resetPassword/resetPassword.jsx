import { useState, } from 'react';
import { useParams } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png"


    const ResetPassword = () => {

      const {token} = useParams()
      const [ResetPassword, setResetPassword] = useState({
        password: '',
    });
      const [error, setError] = useState("");
      const [successful, setSuccessful] = useState("");

      console.log(token)
                        

      const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPassword(prevState => ({ ...prevState, [name]: value }));
  };


    const handleSubmit = async (e) => {
        e.preventDefault()
        




        try {
           await axios.put('https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/reset-password/{token}', {
            token,  // The token extracted from the URL
            password: ResetPassword.password,
          });
          setSuccessful('Password reset successful');
        } catch (error) {
          setError('Error resetting password');
        }
        

    };



  return (
    <div>
      <div className='login-container'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 className='welcome-back'>Please Input Matching Passwords</h3>

        {error && <p className="error">{error}</p>}
        {successful && <p className="success">{successful}</p>}

        <form onSubmit={handleSubmit} autoComplete='on'>
          <input
            type="password"
            value={ResetPassword.password}
            onChange={handleChange}
            placeholder="Input New Password"
            className='login-input'
            id='password'
            name='password'
          />
            <button className='login-button' type='submit'>Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
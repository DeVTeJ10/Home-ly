import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { json, Link } from 'react-router-dom';
import axios from 'axios';
import logo from "../../images/Logo.png"
import { useLocation } from 'react-router-dom';


    const resetPassword = () => {


      const [ResetPassword, setResetPassword] = useState({
        password: '',
    });
      const [error, setError] = useState("");
      const [successful, setSuccessful] = useState("");
      const [token, setToken] = useState('');
      const [query, useSearchParams] = useState()   



       useEffect((e) => {
        const tokenFromUrl = searchParams.get('token') || '';
          setToken(tokenFromUrl); // Update token state
            }, [searchParams]);
                                          


  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPassword(prevState => ({ ...prevState, [name]: value }));
  };



    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
          const response = await axios.put('https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/reset-password/2ad429ca81675a27f59be21e58268d4569652fe9e59ca6c79cc92c97863b5d59?=tejirioru@gmail.com', {
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

export default resetPassword;
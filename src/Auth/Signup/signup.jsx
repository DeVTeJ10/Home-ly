import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logoImg from "../../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
    const [dataForm, setDataForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        mobile: '',
        address: '',
        password: '',
    });

    const navigate = useNavigate()

    useEffect(() => {
        const savedDataForm = JSON.parse(localStorage.getItem('dataform'));
        if (savedDataForm) {
            setDataForm(savedDataForm);
        }
    }, []); // Add dependency array

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/register", dataForm)
            .then(response => {
                console.log("data sent successfully:", response.data);
                setDataForm({ ...dataForm, success: response.data.message, error: "" });
                navigate('/login')

            })
            .catch(error => {
                console.error("error sending data", error);
                const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
                setDataForm({ ...dataForm, error: errorMessage, success: "" });
            });
    };

    return (
        <div>
            <div className='sisenor'>
                <div className='container-signup'>
                    <div className='signup-container'>
                        <Link to="/">
                            <img src={logoImg} alt="Logo" />
                        </Link>
                        <h1 className='anticipates'>Anticipate Your Dream Home</h1>

                        <form onSubmit={handleSubmit} autoComplete='on'>
                            <input type="text" 
                                value={dataForm.first_name}
                                onChange={handleChange} 
                                placeholder="First Name" className='signup-input'
                                id='firstname'
                                name='first_name' /> {/* Correct name attribute */}

                            <input type="text" 
                                value={dataForm.last_name}
                                onChange={handleChange} 
                                placeholder="Last Name" className='signup-input'
                                id='lastname'
                                name='last_name' /> {/* Correct name attribute */}

                            <input type="text" 
                                value={dataForm.username}
                                onChange={handleChange} 
                                placeholder="Username" className='signup-input'
                                id='username'
                                name='username' />

                            <input type="email" 
                                value={dataForm.email} 
                                onChange={handleChange} 
                                placeholder="Email" className='signup-input'
                                id='email'
                                name='email' />

                            <input type='tel' 
                                value={dataForm.mobile} 
                                onChange={handleChange} 
                                placeholder='Mobile' className='signup-input'
                                id='mobile'
                                name='mobile' />

                            <input type='text'
                                value={dataForm.address}
                                onChange={handleChange}
                                placeholder='Address' className='signup-input'
                                id='address'
                                name='address' />

                            <input type="password" 
                                value={dataForm.password} 
                                onChange={handleChange} 
                                placeholder="Password" className='signup-input'
                                id='password'
                                name='password' />

                            <button className='signup-button' type='submit'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

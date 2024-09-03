import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logoImg from "../../images/Logo.png";
import { Link } from "react-router-dom";
import "./signup.css"

const SignUp = () => {
    const [dataForm, setdataForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        mobile: '',
        address: '',
        password: '',
    });

    
    useEffect(() => {
        const savedDataForm = JSON.parse(localStorage.getItem('dataform'))
        if (savedDataForm){
                setDataForm(savedDataForm)
        }
    })

    const handleChange = (e) => {
        const { names, value} = e.target;
        const updatedDataForm = {... dataForm, [names]: value};
        setDataForm(updatedDataForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // const user = { dataForm };

        axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/auth/register:", dataForm)
            .then(response => {
                console.log("data sent successfully:", response.data);
                setdataForm({ ...dataForm, success: response.data.message, error: "" });


                // Save token to local storage
                const token = response.data.token
                localStorage.setItem("authToken", token)
                console.log("Sign up succesful, token stored:", token)

            })
            .catch(error => {
                console.error("error sending data", error);
                const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
                setdataForm({ ...dataForm, error: errorMessage, success: "" });
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
                                onChange={(e) => setdataForm({ ...dataForm, first_name: e.target.value })} 
                                placeholder="First Name" className='signup-input'
                                id='firstname'
                                name='firstname' />

                            <input type="text" 
                                value={dataForm.last_name}
                                onChange={(e) => setdataForm({ ...dataForm, last_name: e.target.value })} 
                                placeholder="Last Name" className='signup-input'
                                id='lastname'
                                name='lastname' />

                            <input type="text" 
                                value={dataForm.username}
                                onChange={(e) => setdataForm({ ...dataForm, username: e.target.value })} 
                                placeholder="Username" className='signup-input'
                                id='username'
                                name='username' />

                            <input type="email" 
                                value={dataForm.email} 
                                onChange={(e) => setdataForm({ ...dataForm, email: e.target.value })} 
                                placeholder="Email" className='signup-input'
                                id='email'
                                name='email' />

                            <input type='tel' 
                                value={dataForm.mobile} 
                                onChange={(e) => setdataForm({ ...dataForm, mobile: e.target.value })} 
                                placeholder='Mobile' className='signup-input'
                                id='mobile'
                                name='mobile' />

                            <input type='text'
                                value={dataForm.address}
                                onChange={(e) => setdataForm({ ...dataForm, address: e.target.value })}
                                placeholder='Address' className='signup-input'
                                id='address'
                                name='address' />

                            <input type="password" 
                                value={dataForm.password} 
                                onChange={(e) => setdataForm({ ...dataForm, password: e.target.value })} 
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
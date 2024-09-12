import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const inputProduct = () => {

    const [CreatePost, setCreatepost] = useState({

        title: '',
        price: '',
        image: '',
        description: '',
        city: '',
        address: '',
        bathroom: '',
        bedroom: '',
        latitude: '',
        longitude: '',
        type: '',
        property: ''

      });


  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState("");

    
  
    const handleSubmit = (e) => {
            e.prevent.default()

            axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/post/create")
        }


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
                                // value={dataForm.first_name}
                                // onChange={handleChange} 
                                placeholder="title" className='signup-input'
                                id='firstname'
                                name='first_name' /> {/* Correct name attribute */}

                            <input type="text" 
                                // value={dataForm.last_name}
                                // onChange={handleChange} 
                                placeholder="price" className='signup-input'
                                id='lastname'
                                name='last_name' /> {/* Correct name attribute */}

                            <input type="text" 
                                // value={dataForm.username}
                                // onChange={handleChange} 
                                placeholder="image" className='signup-input'
                                id='username'
                                name='username' />

                            <input type="text" 
                                // value={dataForm.email} 
                                // onChange={handleChange} 
                                placeholder="description" className='signup-input'
                                id='email'
                                name='email' />

                            <input type='text' 
                                // value={dataForm.mobile} 
                                // onChange={handleChange} 
                                placeholder='city' className='signup-input'
                                id='mobile'
                                name='mobile' />

                            <input type='text'
                                // value={dataForm.address}
                                // onChange={handleChange}
                                placeholder='Address' className='signup-input'
                                id='address'
                                name='address' />

                            <input type="text" 
                                // value={dataForm.password} 
                                // onChange={handleChange} 
                                placeholder="bathroom" className='signup-input'
                                id='password'
                                name='password' />

                            <input type="text" 
                                // value={dataForm.password} 
                                // onChange={handleChange} 
                                placeholder="bedroom" className='signup-input'
                                id='password'
                                name='password' />

                            <input type="text" 
                                // value={dataForm.password} 
                                // onChange={handleChange} 
                                placeholder="latitude" className='signup-input'
                                id='password'
                                name='password' />

                            <input type="text" 
                                // value={dataForm.password} 
                                // onChange={handleChange} 
                                placeholder="longitude" className='signup-input'
                                id='password'
                                name='password' />

                            <input type="text" 
                                // value={dataForm.password} 
                                // onChange={handleChange} 
                                placeholder="type" className='signup-input'
                                id='password'
                                name='password' />

                            <input type="text" 
                                // value={dataForm.password} 
                                // onChange={handleChange} 
                                placeholder="property" className='signup-input'
                                id='password'
                                name='password' />

                            <button className='signup-button' type='submit'>Post Product</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default inputProduct;
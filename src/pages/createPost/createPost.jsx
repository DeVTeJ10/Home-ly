import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.png";
import "./createPost.css"



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


    const handleChange = (e) =>{
        const {name, value} = e.target
        setCreatepost(prevState => ({ ...prevState, [name]: value }));
      }
  
    
  
    const handleSubmit = (e) => {
            e.prevent.default()

            axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/post/create", CreatePost)
            .then(response = () =>{
                console.log("Post created succesfully", response.data)
                setCreatepost({... CreatePost, success: response.data.message, error: ""})
            })
            .catch(error => {
                console.error("error posting data");
                const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
                setCreatepost({ ...CreatePost, error: errorMessage, success: "" });
            });
        }


  return (
    <div>
      <div className='sisenor'>
                <div className='container-signup'>
                    <div className='signup-container'>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>

                        <form onSubmit={handleSubmit} autoComplete='on'>
                            <input type="text" 
                                value={CreatePost.title}
                                onChange={handleChange} 
                                placeholder="title" 
                                id='title'
                                name='title' /> {/* Correct name attribute */}

                            <input type="text" 
                                value={CreatePost.price}
                                onChange={handleChange} 
                                placeholder="price" 
                                id='price'
                                name='price' /> {/* Correct name attribute */}

                            <input type="text" 
                                value={CreatePost.image}
                                onChange={handleChange} 
                                placeholder="image" 
                                id='image'
                                name='image' />

                            <input type="text" 
                                value={CreatePost.description} 
                                onChange={handleChange} 
                                placeholder="description" 
                                id='description'
                                name='description' />

                            <input type='text' 
                                value={CreatePost.city} 
                                onChange={handleChange} 
                                placeholder='city' 
                                id='city'
                                name='city' /> */

                            <input type='text'
                                value={CreatePost.address}
                                onChange={handleChange}
                                placeholder='Address' 
                                id='address'
                                name='address' />

                            <input type="text" 
                                value={CreatePost.bathroom} 
                                onChange={handleChange} 
                                placeholder="bathroom" 
                                id='bathroom'
                                name='bathroom' />

                            <input type="text" 
                                value={CreatePost.bedroom} 
                                onChange={handleChange} 
                                placeholder="bedroom" 
                                id='bedroom'
                                name='bedroom' />

                            <input type="number" 
                                value={CreatePost.latitude} 
                                onChange={handleChange} 
                                placeholder="latitude"
                                id='latitude'
                                name='latitude' />

                            <input type="number" 
                                value={CreatePost.longitude} 
                                onChange={handleChange} 
                                placeholder="longitude"
                                id='longitude'
                                name='longitude' />

                            <input type="text" 
                                value={CreatePost.type} 
                                onChange={handleChange} 
                                placeholder="type" 
                                id='type'
                                name='type' />

                            <input type="text" 
                                value={CreatePost.property} 
                                onChange={handleChange} 
                                placeholder="property"
                                id='property'
                                name='property' />

                            <button type='submit'>Post Product</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default inputProduct;
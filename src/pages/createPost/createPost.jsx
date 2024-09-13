import  {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for styling
import "./createPost.css"



const InputProduct = () => {

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




    const handleChange = (e) =>{
        const {name, value} = e.target;
        setCreatepost(prevState => ({ ...prevState, [name]: value }));
      }

      useEffect(() => {
        const CreateDataForm = JSON.parse(localStorage.getItem('Createpost'));
        if (CreateDataForm) {
            setCreatepost(CreateDataForm);
        }
    }, []); // Add dependency array
  
    console.log(CreatePost)

    const token = localStorage.getItem('authToken');
    console.log(token);

    //how to get a token from localstorage or or how to get items
    
  //how to set a token as an header in axios post request endpoint below
  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/post/create", CreatePost, {
      headers: {
        Authorization: `Bearer ${token}`,  // Ensure token is defined and valid
      },
    })
    .then(response => {  // Renamed 'res' to 'response' to avoid conflicts
      console.log("Post created successfully", response.data);
      toast.success("Post created successfully!")
    })
    .catch(error => {
      console.error("Error posting data", error);
    });
  };
  



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
                                name='title' /> 

                            <input type="number" 
                                value={CreatePost.price}
                                onChange={handleChange} 
                                placeholder="price" 
                                id='price'
                                name='price' /> 

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

                            <input type="number" 
                                value={CreatePost.bathroom} 
                                onChange={handleChange} 
                                placeholder="bathroom" 
                                id='bathroom'
                                name='bathroom' />

                            <input type="number" 
                                value={CreatePost.bedroom} 
                                onChange={handleChange} 
                                placeholder="bedroom" 
                                id='bedroom'
                                name='bedroom' />

                            <input type="text" 
                                value={CreatePost.latitude} 
                                onChange={handleChange} 
                                placeholder="latitude"
                                id='latitude'
                                name='latitude' />

                            <input type="text" 
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

                            <button className='submitBtn' type='submit'>Post Product</button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default InputProduct;
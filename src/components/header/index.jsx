import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";
import logoImg from "../../images/Logo.png";

    

const index = () => {

      const [authUser, setAuthUser] = useState(null)
      const token = localStorage.getItem('authToken');


      console.log("authUser", authUser)
        const fetchData = async () => {
          try {
            const response = await axios.get('https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/user/me', {
              headers: {  // Corrected key here
                Authorization: `Bearer ${token}`,
              },
            });
            setAuthUser(response?.data)
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        };

        useEffect(() => {
          fetchData();
        }, [token]); // Dependency on token
        
  return (
    <div>
      <div className="dashboard">
        <div className="logo1">
          <Link to={"/"}>
          <img src={logoImg} width={113.33} height={34} alt="Logo" />
          </Link>
        </div>
        <div className="dashboardNav">
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
          <Link to={"/about-us"}>
            <h3>About us</h3>
          </Link>
          <Link to={"/properties-page"}>
          <h3>Properties</h3>
          </Link>
          <Link to={"/services-page"}>
          <h3>Services</h3>
          </Link>
        </div>
        {
          authUser?.user?.first_name ?
          <span>Welcome: {authUser?.user?.first_name}</span>
          :
          <div className="contact-us">
          <Link to={"/signup"}>
            <button className="contactUS">Sign up</button>
          </Link>
          <Link to={"/login"}>
            <button className="contactUS">Login</button>
          </Link>
          </div>
        }
       
      </div>
    </div>
  );
};

export default index;
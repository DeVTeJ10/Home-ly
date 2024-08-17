import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

// Import the logo image
import logoImg from "../../images/Logo.png";

const index = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="logo1">
          <img src={logoImg} width={113.33} height={34} alt="Logo" />
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
        <div className="contact-us">
          <button className="contactUS">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default index;
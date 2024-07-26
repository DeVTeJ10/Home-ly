import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const index = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="logo1">
          <img src="./src/images/Logo.png" width={113.33} height={34} />
        </div>
        <div className="dashboardNav">
          <Link to={"/"}>
            <h3>Home</h3>
          </Link>
          <Link to={"/about-us"}>
            <h3>About us</h3>
          </Link>

          <h3>Properties</h3>
          <h3>Services</h3>
        </div>
        <div className="contact-us">
          <button className="contactUS">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default index;

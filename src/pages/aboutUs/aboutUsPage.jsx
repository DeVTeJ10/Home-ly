import React from "react";
import HeaderComponent from "../../components/Header/index";
import { Link, Route, Routes } from "react-router-dom";
import "./aboutUs.css";

const aboutUs = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="hellos">
          <div className="discoveries">
          <div className="Discovery">
          <div className="starry1">
            <img src="./src/images/star1.png" width={24} height={24} />
            <img src="./src/images/star2.png" width={14.4} height={14.4} />
            <img src="./src/images/star3.png" width={6.72} height={6.72} />
          </div>

          <div className="ourjourney">
          <h1 className="Dream"> Our Journey</h1>
          <p className="journey">
            Our story is one of continuous growth and evolution. We started as a
            small team with<br></br> big dreams, determined to create a real
            estate platform that transcended the<br></br> ordinary. Over the
            years, we've expanded our reach, forged valuable partnerships,
            <br></br> and gained the trust of countless clients.
          </p>
          <div className="experiences">
            <div className="happyCustomers">
              <h2 className="customer1">200+</h2>
              <p className="customers44">Happy customers</p>
            </div>
            <div className="clientProperties">
              <h3 className="customer1">100k+</h3>
              <p className="customers4">Properties for clients</p>
            </div>
            <div className="yearsofExperience">
              <h3 className="customer1">16+</h3>
              <p className="customers4">Years of experience</p>
            </div>
          </div>
          </div>
        </div>
          </div>
        <img src="./src/images/householding.png" width={610} height={435} className="household" />
      </div>

      <div className="ourjourneys">
      <div className="starry1">
            <img src="./src/images/star1.png" width={24} height={24} />
            <img src="./src/images/star2.png" width={14.4} height={14.4} />
            <img src="./src/images/star3.png" width={6.72} height={6.72} />
          </div>
          <div className="ourjourney">
          <h1 className="Dream"> Our Values</h1>
          <p className="journey">
              Our story is one of continuous growth and evolution. We<br></br> started 
              as a small team with big dreams, 
              determined to<br></br> create a real estate platform that transcended the<br></br> ordinary.
          </p>
          </div>
      </div>
        <img src="./src/images/truststar.png" width={23.12} height={22.14} />
        <h4>Trust</h4>
        <p>Trust is the cornerstone of every successful<br></br> real estate transaction.</p>
    </div>
  );
};

export default aboutUs;

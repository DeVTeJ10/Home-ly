import React from 'react'
import HeaderComponent from '../../components/Header/index'
import { Link, Route, Routes } from "react-router-dom";
import "./aboutUs.css";



const aboutUs = () => {
  return (
    <div>
      <HeaderComponent />
      <div className='checking'>
      <div className="s">
            <img src="./src/images/star1.png" width={24} height={24} />
            <img src="./src/images/star2.png" width={14.4} height={14.4} />
            <img src="./src/images/star3.png" width={6.72} height={6.72} />
        </div>
            <h1>Our Journey</h1>
        <div className="">
            <p className="">
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, 
                determined to create a real estate platform that transcended the ordinary. Over the years, 
                we've expanded our reach, 
                forged valuable partnerships, and gained the trust of countless clients.
            </p>
      </div>
      </div>
  </div>
  )
}

export default aboutUs



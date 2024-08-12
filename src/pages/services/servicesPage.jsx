import React from 'react'
import HeaderComp from "../../components/Header/index";
import DreamHome from "../../components/DreamHome/index"
import "./servicesPage.css"


const servicesPage = () => {
  return (
    <div>
        <div>
            <HeaderComp />
        <div className='servicecomp1'>
        <h1>Elevate Your Real Estate Experience</h1>
            <p>Welcome to Estatein, where your real estate aspirations meet expert guidance. 
                Explore our comprehensive range of services, 
                each designed to cater to your unique<br></br> needs and dreams.</p>
        </div>
        <DreamHome />
        </div>
    </div>
  )
}

export default servicesPage

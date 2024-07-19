import React from 'react'
import HomePage from '../../components/header/index'
import DreamHome from '../../components/dreamHome/index'
import { Link } from "react-router-dom"
import "./homePage.css"


const homePage = () => {
  return (
    <div>
        <HomePage />
      <div className='hello'>
      <div className='Discover'>
        <h1 className='Dream'> Discover your Dream <br></br> Property with Estatein</h1>
      <p className='journey'>Your journey to finding the perfect property begins here. 
          Explore our listings to find the <br></br> home that matches your dreams.</p>
      <div className='learnProperties'>
          <button className='learnMore'> Learn more </button>
          <button className='browseProp'> Browse properties </button>
      </div>
      <div className='experiences'>
      <div className='happyCustomers'>
          <h2 className='customer1'>200+</h2>
          <p className='customers44'>Happy customers</p>
      </div>
      <div className='clientProperties'>
          <h3 className='customer1'>100k+</h3>
          <p className='customers4'>Properties for clients</p>
      </div>
      <div className='yearsofExperience'>
          <h3 className='customer1'>16+</h3>
          <p className='customers4'>Years of experience</p>
      </div>
      </div>
      </div>
      <img src="./src/images/check.jpg" width={690} height={622}/>
      </div>
      < DreamHome />
    </div>
  )
}


export default homePage

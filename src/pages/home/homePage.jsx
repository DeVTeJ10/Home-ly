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
          <img src="./src/images/circogo.png" width={129} height={129} className='type'/>
      <div className='starSign'>
          <img src="./src/images/star1.png" width={24} height={24}/>
          <img src="./src/images/star2.png" width={14.4} height={14.4}/>
          <img src="./src/images/star3.png" width={6.72} height={6.72}/>
      </div>

      <div className='checkprops'>
          <h1>Featured Properties</h1>
        <div className='allProperties'>
          <p className='xplore'>Explore our handpicked selection of featured properties. Each listing offers a 
                glimpse into exceptional homes and investments available<br></br>through 
                Estatein. Click "View Details" for more information.</p>
           <button className='viewAll'>View All Properties</button>
      </div>

      <div>
          <img src='./src/images/villa.png' width={353.33} height={255} />
          <h3>Seaside Serenity Villa</h3>
          <p>A stunning 4-bedroom, 3-bathroom villa in a <br></br>peaceful 
          suburban neighborhood... <b>Read More</b></p>
        <div className='whatif'> 
          <div className='propteristics'>
          <img src='./src/images/bedroom.png' width={22} height={17} />
          <h3> 4-Bedroom </h3>
        </div>
        <div className='bathroom'>
          <img src='./src/images/bathroom.png' width={21.02} height={21} />
          <h3> 3-Bathroom </h3>
        </div>
        <div className='villa2'>
          <img src='./src/images/villa 2.png' width={14} height={16} />
          <h3> Villa </h3>
        </div>
          </div>
        
      </div>
      </div>
    </div>
  )
}


export default homePage

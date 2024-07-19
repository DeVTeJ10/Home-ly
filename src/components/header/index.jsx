import React from 'react'
import './header.css'

const index = () => {
  return (
    <div>
      <div className='dashboard'>
      <div className='logo1'>
          <img src="./src/images/Logo.png" width={113.33} height={34}/>
      </div>
      <div className='dashboardNav'>
          <h3>Home</h3>
          <h3>About us</h3>
          <h3>Properties</h3>
          <h3>Services</h3>
      </div>
      <div className='contact-us'>
          <button className='contactUS'>Contact us</button>
      </div>
      </div>
    </div>
  )
}


export default index

import React from 'react'
import './footer.css'




const index = () => {
  return (
    <div>
        <div className='mailogo'>
            <div>
                
            </div>
        <div className='logo2'>
        <img src="./src/images/Logo.png" width={113.33} height={34} className='logo2s'/>

                <p>Home</p>
                <p>About Us</p>
                <p>Properties</p>
                <p>Services</p>
                <p>Contact Us</p>
        </div>
        </div>
            <input placeholder='Enter Your Email' className='emails'></input>

    </div>
  )
}

export default index

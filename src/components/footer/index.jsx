import React from 'react'
import './footer.css'




const index = () => {
  return (
    <div>
        <div className='sentient'>
            <div className='logo2s'>
                <img src="./src/images/Logo.png" width={113.33} height={34} />
            </div>
            <div className='features'>
                <p>Home</p>
                <p>About Us</p>
                <p>Properties</p>
                <p>Services</p>
                <p>Contact Us</p>
            </div>
        </div>

        <div className='sentients'>
            <div className=''>
                <input placeholder='Enter Your Email' className='emails'></input>
            </div>
            <div className='feature2'>
                <p>Home</p>
                <p>About Us</p>
                <p>Properties</p>
                <p>Services</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default index

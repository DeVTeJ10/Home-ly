import React from 'react'
import './footer.css'




const index = () => {
  return (
    <div>

        <div className='finalfooter'>
        <div className='sentient'>
        <div className='logo2s'>
                <img src="./src/images/Logo.png" width={113.33} height={34} />
        </div>
                <input placeholder='Enter Your Email' className='emails'></input>
        </div>

        <div className='x'>
        <div className='features1'>
        <div className='features'>
                <p className='highlights'>Home</p>
                <p>Hero Section</p>
                <p>Features</p>
                <p>Properties</p>
                <p>Testimonials</p>
                <p>FAQs</p>
        </div>
        </div>
        <div className='features1'>
        <div className='features'>
                <p className='highlights'>About Us</p>
                <p>Our Story</p>
                <p>Our Works</p>
                <p>How It Works</p>
                <p>Our Team</p>
                <p>Our Clients</p>
        </div>
        </div>
        <div className='features1'>
        <div className='features'>
                <p className='highlights'>Properties</p>
                <p>Portfolios</p>
                <p>categories</p>
        </div>
        </div>
        <div className='features1'>
        <div className='features'>
                <p className='highlights'>Services</p>
                <p>Valuation Mastery</p>
                <p>Strategic Marketing</p>
                <p>Negotiation Wizardry</p>
                <p>Closing Success</p>
                <p>Property Management</p>
        </div>
        </div>
        <div className='features1'>
        <div className='features'>
                <p className='highlights'>Contact Us</p>
                <p>Contact Form</p>
                <p>Our Offices</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default index

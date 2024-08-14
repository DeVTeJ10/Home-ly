import React from 'react'
import Header from "../../components/Header/index";
import DreamHome from "../../components/DreamHome/index"
import "./servicesPage.css"

const servicesPage = () => {
  return (
    <div>
          <Header />
          <div className='ElevateGem'>
          <div className='Gemini'>
             <h1 className='Elevate'>Elevate Your Real Estate Experience</h1>
             <p>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, 
                each designed to cater to your unique<br></br> needs and dreams.</p>
        </div>
        {/* <DreamHome /> */}
        <div className='dreamhomesxq'>
            <div className='find'>
                <img src="./src/images/try.png" width={60} height={60} />
                <p className='dreamHome'> Find Your Dream Home </p>
            </div>
            <div className='unlock'>
                <img src="./src/images/property.png" width={60} height={60}/>
                <p className='dreamHome'> Unlock Property Value </p>
            </div>
            <div className='management'>
                <img src="./src/images/try.png" width={60} height={60}/>
                <p className='dreamHome'> Effortless Property Management </p>
            </div>
            <div className='investment'>
                <img src="./src/images/try.png" width={60} height={60}/>
                <p className='dreamHome'> Smart Investments, Informed Decisions </p>
            </div>
        </div>
          </div>


        <div className="starSigns">
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
      </div>

    <div>
    <div className="clientFeedbacks">
        <h1> Unlock Property Value </h1>
        <div className="clientSay">
          <p className="success">
          Selling your property should be a rewarding experience, and at Estatein, we make sure it is. 
          Our Property Selling Service is designed to maximize<br></br> the value of your property, 
          ensuring you get the best deal possible. 
          Explore the categories below to see how we can help you at every step of your<br></br> selling journey
          </p>
        </div>
      </div>
    </div>
        <div className='mastervalue'>
        <div className="valuemastery">
        <div className="valuation">
            <img src="./src/images/valuation.png" width={60} height={60} />
            <h3>Valuation Mastery</h3>
        </div>
            <p>Discover the true worth of your property with<br></br> our expert valuation services.</p>
        </div>
        <div className="valuemastery">
        <div className="valuation">
            <img src="./src/images/strategic.png" width={60} height={60} />
            <h3>Strategic Marketing</h3>
        </div>
            <p>Selling a property requires more than just a<br></br> listing; 
                it demands a strategic marketing.</p>
        </div>
        <div className="valuemastery">
        <div className="valuation">
            <img src="./src/images/wizardry.png" width={60} height={60} />
            <h3>Negotiation Wizardry</h3>
        </div>
            <p>Negotiating the best deal is an art, and our<br></br> negotiation experts are masters of it.</p>
        </div>    
        </div>

    <div className='masterysuccess'>
    <div className="valuemasterys">
        <div className="valuation">
            <img src="./src/images/success.png" width={60} height={60} />
            <h3>Closing Success</h3>
        </div>
            <p>A successful sale is not complete until the<br></br> closing. 
                We guide you through the intricate<br></br> closing process.</p>
        </div>
        
        <div className="valuemasteries">
        <div className="valuations">
            <h3>Unlock the Value of Your Property Today</h3>
            <button className='masterchef'>Learn More</button>
        </div>
            <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and 
                let us help you achieve the best deal possible for your valuable asset.</p>
        </div>
    </div>
    <div className="starSigns">
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
      </div>

    <div>
    <div className="clientFeedbacks">
        <h1> Smart Investments,<br></br> Informed Decisions </h1>
        <div className="clientSay">
          <p className="success">
          Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, 
          offering<br></br> comprehensive solutions tailored to your needs. 
          Explore the categories below to see how we can make property management effortless for you
          </p>
        </div>
      </div>
    </div>
        <div className='mastervalue'>
        <div className="valuemastery">
        <div className="valuation">
            <img src="./src/images/harmony.png" width={60} height={60} />
            <h3>Tenant Harmony</h3>
        </div>
            <p>Our Tenant Management services ensure that<br></br> your tenants have a smooth and reducing<br></br> vacancies.</p>
        </div>
        <div className="valuemastery">
        <div className="valuation">
            <img src="./src/images/maintainance.png" width={60} height={60} />
            <h3>Maintenance Ease</h3>
        </div>
            <p>Selling a property requires more than just a<br></br> listing; 
                it demands a strategic marketing.</p>
        </div>
        <div className="valuemastery">
        <div className="valuation">
            <img src="./src/images/financial.png" width={60} height={60} />
            <h3>Financial Peace of Mind</h3>
        </div>
            <p>Managing property finances can be complex.<br></br> Our financial experts take care of rent<br></br> collection</p>
        </div>    
        </div>

    <div className='masterysuccess'>
    <div className="valuemasterys">
        <div className="valuation">
            <img src="./src/images/guardian.png" width={60} height={60} />
            <h3>Legal Guardian</h3>
        </div>
            <p>Stay compliant with property laws and<br></br> regulations effortlessly.</p>
        </div>
        
        <div className="valuemasteries">
        <div className="valuations">
            <h3>Experience Effortless Property Management</h3>
            <button className='masterchef'>Learn More</button>
        </div>
            <p>Ready to experience hassle-free property management? Explore our Property Management Service<br></br> 
            categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
        </div>
    </div>
    </div>
  )
}

export default servicesPage

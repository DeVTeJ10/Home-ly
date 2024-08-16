import React from "react";
import Header from "../../components/header";
import FooterComponent from "../../components/footer";
import DreamHome from "../../components/dreamHome";
import checkImg from "../../images/Container.png";
import circogo from "../../images/circogo.png";
import star1Img from "../../images/star1.png";
import star2Img from "../../images/star2.png";
import star3Img from "../../images/star3.png";
import villaImg from "../../images/villa.png";
import bedroomImg from "../../images/bedroom.png";
import bathroomImg from "../../images/bathroom.png";
import villa2Img from "../../images/villa 2.png";
import havenImg from "../../images/haven.png";
import cottageImg from "../../images/cottage.png";
import arrow2Img from "../../images/arrow2.png";
import arrow1Img from "../../images/arrow1.png";
import stars1Img from "../../images/stars1.png";
import stars2Img from "../../images/stars2.png";
import stars3Img from "../../images/stars3.png";
import stars4Img from "../../images/stars4.png";
import stars5Img from "../../images/stars5.png";
import wadeImg from "../../images/wade.png";
import emelieImg from "../../images/emelie.png";
import johnImg from "../../images/john.png";
import { Link, Route, Routes } from "react-router-dom";
import "./propertiesPage.css";

function homePage() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="homeText">
          <h1>
            Discover Your <br /> Dream Home
          </h1>
          <p>
            Explore our curated selection of luxurious properties, <br />
            tailored to your unique preferences and lifestyle.
          </p>
          <button className="explore">Explore Properties</button>
        </div>
        <div className="homeImg">
          <img src={checkImg} width={690} height={622} alt="Check" />
        </div>
      </div>

      <div className="home2">
        <div className="home2Text">
          <h1>
            <img src={circogo} width={129} height={129} alt="Circogo" className="type" />
            <br />
            <span className="type">Estatein</span>
          </h1>
          <p>
            Your trusted partner in finding the perfect home. <br />
            With a commitment to excellence and a passion for <br />
            real estate, we're here to guide you every step <br />
            of the way.
          </p>
          <button className="explore">Learn More</button>
        </div>
        <div className="home2Img">
          <img src={checkImg} width={690} height={622} alt="Check" />
        </div>
      </div>

      <div className="starSign">
        <img src={star1Img} width={24} height={24} alt="Star 1" />
        <img src={star2Img} width={14.4} height={14.4} alt="Star 2" />
        <img src={star3Img} width={6.72} height={6.72} alt="Star 3" />
      </div>

      <div className="colors">
        <div className="checkprops">
          <h1>Featured Properties</h1>
          <div className="allProperties">
            <p className="xplore">
              Explore our handpicked selection of exquisite properties, <br />
              featuring stunning designs, prime locations, and <br />
              unparalleled luxury.
            </p>
            <button className="viewAll">View all Properties</button>
          </div>
        </div>
      </div>

      <div className="cottage">
        <div className="cottageImg">
          <img src={villaImg} width={353.33} height={255} alt="Villa" className="cottage" />
        </div>
        <div className="cottageText">
          <h1>Seaside Serenity Villa</h1>
          <div className="cottageDetails">
            <div className="cottageDetail">
              <img src={bedroomImg} width={20} height={20} alt="Bedroom" />
              <p>Bedrooms</p>
              <h3>04</h3>
            </div>
            <div className="cottageDetail">
              <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
              <p>Bathroom</p>
              <h3>03</h3>
            </div>
            <div className="cottageDetail">
              <img src={villa2Img} width={20} height={20} alt="Villa 2" />
              <p>Area</p>
              <h3>2,500 Square Feet</h3>
            </div>
          </div>
          <div className="cottagePrice">
            <p>Price</p>
            <h2>$1,250,000</h2>
          </div>
          <button className="explore">View Property</button>
        </div>
      </div>

      <div className="cottage">
        <div className="cottageImg">
          <img src={havenImg} width={353.33} height={255} alt="Haven" className="cottage" />
        </div>
        <div className="cottageText">
          <h1>Urban Oasis Haven</h1>
          <div className="cottageDetails">
            <div className="cottageDetail">
              <img src={bedroomImg} width={20} height={20} alt="Bedroom" />
              <p>Bedrooms</p>
              <h3>03</h3>
            </div>
            <div className="cottageDetail">
              <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
              <p>Bathroom</p>
              <h3>02</h3>
            </div>
            <div className="cottageDetail">
              <img src={villa2Img} width={20} height={20} alt="Villa 2" />
              <p>Area</p>
              <h3>1,800 Square Feet</h3>
            </div>
          </div>
          <div className="cottagePrice">
            <p>Price</p>
            <h2>$850,000</h2>
          </div>
          <button className="explore">View Property</button>
        </div>
      </div>

      <div className="cottage">
        <div className="cottageImg">
          <img src={cottageImg} width={353.33} height={255} alt="Cottage" className="cottage" />
        </div>
        <div className="cottageText">
          <h1>Rustic Retreat Cottage</h1>
          <div className="cottageDetails">
            <div className="cottageDetail">
              <img src={bedroomImg} width={20} height={20} alt="Bedroom" />
              <p>Bedrooms</p>
              <h3>02</h3>
            </div>
            <div className="cottageDetail">
              <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
              <p>Bathroom</p>
              <h3>01</h3>
            </div>
            <div className="cottageDetail">
              <img src={villa2Img} width={20} height={20} alt="Villa 2" />
              <p>Area</p>
              <h3>1,200 Square Feet</h3>
            </div>
          </div>
          <div className="cottagePrice">
            <p>Price</p>
            <h2>$650,000</h2>
          </div>
          <button className="explore">View Property</button>
        </div>
      </div>

      <div className="pages">
        <p> 01 of 10 </p>
        <div className="pageBTNs">
          <button className="nextPage1">
            <img src={arrow2Img} width={24} height={24} alt="Arrow 2" />
          </button>
          <button className="nextPage2">
            <img src={arrow1Img} width={24} height={24} alt="Arrow 1" />
          </button>
        </div>
      </div>

      <div className="starSign">
        <img src={star1Img} width={24} height={24} alt="Star 1" />
        <img src={star2Img} width={14.4} height={14.4} alt="Star 2" />
        <img src={star3Img} width={6.72} height={6.72} alt="Star 3" />
      </div>

      <div className="colors">
        <div className="checkprops">
          <h1>Client Testimonials</h1>
          <div className="allProperties">
            <p className="xplore">
              Discover what our satisfied clients have to say about their <br />
              exceptional experiences working with Estatein.
            </p>
            <button className="viewAll">View all Testimonials</button>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <div className="testimonialImg">
            <img src={wadeImg} width={100} height={100} alt="Wade" />
          </div>
          <div className="testimonialText">
            <h1>Wade Warren</h1>
            <p>
              "Estatein exceeded my expectations in every way. <br />
              From the initial consultation to the closing, their <br />
              team was professional, knowledgeable, and <br />
              genuinely caring. I highly recommend Estatein <br />
              to anyone looking for a top-notch real estate <br />
              experience."
            </p>
            <div className="stars">
              <img src={stars1Img} width={120} height={24} alt="Stars 1" />
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonialImg">
            <img src={emelieImg} width={100} height={100} alt="Emelie" />
          </div>
          <div className="testimonialText">
            <h1>Emelie Gates</h1>
            <p>
              "I couldn't have asked for a better real estate <br />
              partner than Estatein. Their attention to detail, <br />
              personalized service, and commitment to <br />
              finding the perfect home for me and my <br />
              family were truly remarkable. I'm grateful <br />
              for the exceptional experience."
            </p>
            <div className="stars">
              <img src={stars2Img} width={120} height={24} alt="Stars 2" />
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonialImg">
            <img src={johnImg} width={100} height={100} alt="John" />
          </div>
          <div className="testimonialText">
            <h1>John Smith</h1>
            <p>
              "Estatein's team was instrumental in helping <br />
              me sell my property quickly and for a fair <br />
              price. Their marketing strategies, <br />
              negotiation skills, and overall professionalism <br />
              were outstanding. I would definitely <br />
              recommend Estatein to anyone <br />
              looking to buy or sell."
            </p>
            <div className="stars">
              <img src={stars3Img} width={120} height={24} alt="Stars 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="pages">
        <p> 01 of 10 </p>
        <div className="pageBTNs">
          <button className="nextPage1">
            <img src={arrow2Img} width={24} height={24} alt="Arrow 2" />
          </button>
          <button className="nextPage2">
            <img src={arrow1Img} width={24} height={24} alt="Arrow 1" />
          </button>
        </div>
      </div>

      <div className="starSign">
        <img src={star1Img} width={24} height={24} alt="Star 1" />
        <img src={star2Img} width={14.4} height={14.4} alt="Star 2" />
        <img src={star3Img} width={6.72} height={6.72} alt="Star 3" />
      </div>

      <div className="colors">
        <div className="checkprops">
          <h1>Frequently Asked Questions</h1>
          <div className="allProperties">
            <p className="xplore">
              Find answers to common questions about Estatein's services, <br />
              property listings, and the real estate process. We're here to <br />
              provide clarity and assist you every step of the way.
            </p>
            <button className="viewAll">View all FAQs</button>
          </div>
        </div>

        <div className="qwertysp">
          <div className="qwertys">
            <h3>
              How do I search for properties on<br />
              Estatein?
            </h3>
            <p className="learnHow">
              Learn how to use our user-friendly search tools<br />
              to find properties that match your criteria.
            </p>
            <button className="viewAlls1"> Read More</button>
          </div>
          <div className="qwertys">
            <h3>
              What documents do I need to sell my<br />
              property through Estatein?
            </h3>
            <p className="learnHow">
              Find out about the necessary documentation <br />
              for listing your property with us.
            </p>
            <button className="viewAlls1"> Read More</button>
          </div>
          <div className="qwertys">
            <h3>How can I contact an Estatein agent?</h3>
            <p className="learnHows">
              Discover the different ways you can get in touch<br />
              with our experienced agents.
            </p>
            <button className="viewAlls1"> Read More</button>
          </div>
        </div>
      </div>
      <div className="pages2">
        <p> 01 of 10 </p>
        <div className="pageBTNs">
          <button className="nextPage1">
            <img src={arrow2Img} width={24} height={24} alt="Arrow 2" />
          </button>
          <button className="nextPage2">
            <img src={arrow1Img} width={24} height={24} alt="Arrow 1" />
          </button>
        </div>
      </div>

      <div className="checkpropss">
        <h1>Start Your Real Estate Journey Today</h1>
        <div className="allProperties">
          <p className="xplore">
            Your dream property is just a click away. Whether you're looking for <br />
            a new home, a strategic investment, or expert real estate advice, <br />
            Estatein is here to assist you every step of the way. Take <br />
            the first step towards your real estate goals and explore our <br />
            available properties or get in touch with our team for <br />
            personalized assistance.
          </p>
          <button className="viewAllsss">Explore Properties</button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default homePage;

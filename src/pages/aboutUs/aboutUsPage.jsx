import React from "react";
import HeaderComponent from "../../components/Header/index";
import { Link, Route, Routes } from "react-router-dom";
import "./aboutUs.css";

const aboutUs = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="hellos">
        <div className="discoveries">
          <div className="Discovery">
            <div className="starry1">
              <img src="./src/images/star1.png" width={24} height={24} />
              <img src="./src/images/star2.png" width={14.4} height={14.4} />
              <img src="./src/images/star3.png" width={6.72} height={6.72} />
            </div>

            <div className="ourjourney">
              <h1 className="Dream"> Our Journey</h1>
              <p className="journey">
                Our story is one of continuous growth and evolution. We started
                as a small team with<br></br> big dreams, determined to create a
                real estate platform that transcended the<br></br> ordinary.
                Over the years, we've expanded our reach, forged valuable
                partnerships,
                <br></br> and gained the trust of countless clients.
              </p>
              <div className="experiences">
                <div className="happyCustomers">
                  <h2 className="customer1">200+</h2>
                  <p className="customers44">Happy customers</p>
                </div>
                <div className="clientProperties">
                  <h3 className="customer1">100k+</h3>
                  <p className="customers4">Properties for clients</p>
                </div>
                <div className="yearsofExperience">
                  <h3 className="customer1">16+</h3>
                  <p className="customers4">Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./src/images/householding.png"
          width={610}
          height={435}
          className="household"
        />
      </div>

      <div className="trythisone">
        <div className="holla">
          <div className="starry1">
            <img src="./src/images/star1.png" width={24} height={24} />
            <img src="./src/images/star2.png" width={14.4} height={14.4} />
            <img src="./src/images/star3.png" width={6.72} height={6.72} />
          </div>
          <div className="ourjourney">
            <h1 className="Dream"> Our Values</h1>
            <p className="journey">
              Our story is one of continuous growth and evolution. We<br></br>{" "}
              started as a small team with big dreams, determined to<br></br>{" "}
              create a real estate platform that transcended the<br></br>{" "}
              ordinary.
            </p>
          </div>
        </div>

        <div className="Eureka">
          <div className="bosslevelapp">
            <div className="starcomp">
              <div className="starsdiv">
                <img
                  src="./src/images/truststar.png"
                  width={60}
                  height={60}
                  className="starjourney"
                />
                <h3>Trust</h3>
              </div>
              <p>
                Trust is the cornerstone of every successful<br></br> real
                estate transaction.
              </p>
            </div>
            <div className="starcomp">
              <div className="starsdiv">
                <img
                  src="./src/images/excellence.png"
                  width={60}
                  height={60}
                  className="starjourney"
                />
                <h3>Excellence</h3>
              </div>
              <p>
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </p>
            </div>
          </div>

          <div className="bosslevelapps">
            <div className="starcomp">
              <div className="starsdiv">
                <img
                  src="./src/images/client3.png"
                  width={60}
                  height={60}
                  className="starjourney"
                />
                <h3>Client-Centric</h3>
              </div>
              <p>
              Your dreams and needs are at the center of<br></br> our universe.
               We listen, understand.
              </p>
            </div>
            <div className="starcomp">
              <div className="starsdiv">
                <img
                  src="./src/images/excellence.png"
                  width={60}
                  height={60}
                  className="starjourney"
                />
                <h3>Our Commitment</h3>
              </div>
              <p>
                We are dedicated to providing you with the <br></br>highest level of service, 
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="starprops">
      <div className="starSign">
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
      </div>
      <div className="checkprops">
          <h1>Our Achievements</h1>
          <div className="allProperties">
            <p className="xplore">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, 
            determined to create a real estate platform that<br></br> transcended the ordinary.
            </p>
          </div>
        </div>
      </div>
      <div className="qwertysp">
          <div className="qwertyuiop">
            <h3>
              3+ Years of Excellence
            </h3>
            <p className="learnHow">
            With over 3 years in the industry, we've<br></br> amassed a wealth of knowledge and<br>
            </br> experience.
            </p>
          </div>
          <div className="qwertyuiop">
            <h3>
              Happy Clients
            </h3>
            <p className="learnHow">
            Our greatest achievement is the satisfaction<br></br> of our clients. 
            Their success stories fuel our<br></br> passion for what we do.
            </p>
          </div>
          <div className="qwertyuiop">
            <h3>Industry Recognition</h3>
            <p className="learnHowss">
                We've earned the respect of our peers and<br></br> industry leaders, 
                with accolades and awards<br></br> that reflect our commitment to excellence.
            </p>

          </div>
        </div>
        <div className="Navstarsign">
        <div className="starSign">
          <img src="./src/images/star1.png" width={24} height={24} />
          <img src="./src/images/star2.png" width={14.4} height={14.4} />
          <img src="./src/images/star3.png" width={6.72} height={6.72} />
        </div>
          <div className="checkprops">
            <h1>Navigating the Estatein Experience</h1>
            <div className="allProperties">
              <p className="xplore">
                  At Estatein, we've designed a straightforward process to help you 
                  find and purchase your dream property with ease. 
                  Here's a step-by-step guide<br></br> to how it all works.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default aboutUs;

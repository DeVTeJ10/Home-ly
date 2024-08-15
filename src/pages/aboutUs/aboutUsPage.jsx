import React from "react";
import HeaderComponent from "../../components/header/indexmax";
import Footer from "../../components/Footer/indexmaxx";
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
                Your dreams and needs are at the center of<br></br> our
                universe. We listen, understand.
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
                We are dedicated to providing you with the <br></br>highest
                level of service, professionalism.
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
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that<br></br> transcended the ordinary.
            </p>
          </div>
        </div>
      </div>
      <div className="qwertysp">
        <div className="qwertyuiop">
          <h3>3+ Years of Excellence</h3>
          <p className="learnHow">
            With over 3 years in the industry, we've<br></br> amassed a wealth
            of knowledge and<br></br> experience.
          </p>
        </div>
        <div className="qwertyuiop">
          <h3>Happy Clients</h3>
          <p className="learnHow">
            Our greatest achievement is the satisfaction<br></br> of our
            clients. Their success stories fuel our<br></br> passion for what we
            do.
          </p>
        </div>
        <div className="qwertyuiop">
          <h3>Industry Recognition</h3>
          <p className="learnHowss">
            We've earned the respect of our peers and<br></br> industry leaders,
            with accolades and awards<br></br> that reflect our commitment to
            excellence.
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
              find and purchase your dream property with ease. Here's a
              step-by-step guide<br></br> to how it all works.
            </p>
          </div>
        </div>
      </div>

      <div className="steps">
        <h4>Step 01</h4>
        <h4>Step 02</h4>
        <h4>Step 03</h4>
      </div>
      <div className="qwertysp">
        <div className="qwertyuiops">
          <h3>Discover a World of Possibilities</h3>
          <p className="learnHow">
            Your journey begins with exploring our carefully<br></br> curated
            property listings. Use our intuitive<br></br> search tools to filter
            properties based on your<br></br> preferences, including location,
          </p>
        </div>
        <div className="qwertyuiops">
          <h3>Narrowing Down Your Choices</h3>
          <p className="learnHow">
            Once you've found properties that catch your <br></br> eye, save
            them to your account or make a<br></br> shortlist. This allows you
            to compare and revisit<br></br> your favorites as you make your
            decision.
          </p>
        </div>
        <div className="qwertyuiops">
          <h3>Personalized Guidance</h3>
          <p className="learnHowss">
            Have questions about a property or need more<br></br> information?
            Our dedicated team of real<br></br> estate experts is just a call or
            message away.
          </p>
        </div>
      </div>

      <div className="howdydo">
        <div className="steps">
          <h4>Step 04</h4>
          <h4>Step 05</h4>
          <h4>Step 06</h4>
        </div>
        <div className="qwertysp">
          <div className="qwertyuiops">
            <h3>See It for Yourself</h3>
            <p className="learnHow">
              Arrange viewings of the properties you're<br></br> interested in.
              We'll coordinate with the property<br></br> owners and accompany
              you to ensure you get<br></br> a firsthand look at your potential
              new home.
            </p>
          </div>
          <div className="qwertyuiops">
            <h3>Making Informed Decisions</h3>
            <p className="learnHow">
              Before making an offer, our team will assist you<br></br> with due
              diligence, including property<br></br>
              inspections, legal checks, and market analysis.<br></br> We want
              you to be fully informed.
            </p>
          </div>
          <div className="qwertyuiops">
            <h3>Getting the Best Deal</h3>
            <p className="learnHowss">
              We'll help you negotiate the best terms and<br></br> prepare your
              offer. Our goal is to secure the<br></br> property at the right
              price and on favorable<br></br> terms.
            </p>
          </div>
        </div>
      </div>
      <div className="hollas">
        <div className="starry1">
          <img src="./src/images/star1.png" width={24} height={24} />
          <img src="./src/images/star2.png" width={14.4} height={14.4} />
          <img src="./src/images/star3.png" width={6.72} height={6.72} />
        </div>
        <div className="ourjourney">
          <h1 className="Dream"> Meet the Estatein Team</h1>
          <p className="journey">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate<br></br> dreams a reality.
          </p>
        </div>
      </div>

      <div className="succesful">
        <div className="sups">
          <div className="delegates">
            <div className="tweetpic">
              <img
                src="./src/images/Max.png"
                width={257}
                height={220}
                className="max"
              />
              <div className="tweetsss">
                <button className="tweets">
                  {" "}
                  <img
                    className="tweetings"
                    src="./src/images/tweet.png"
                    width={20}
                    height={16.25}
                  />
                </button>
              </div>
            </div>
            <h3>Max Mitchel</h3>
            <p>Founder</p>
            <div className="sayshello">
              <div className="sayhellos">
                <h4>Say Hello</h4>
                <img src="./src/images/wave.png" width={36} height={36} />
              </div>
              <img src="./src/images/send.png" width={36} height={36} />
            </div>
          </div>
        </div>
        <div className="sups">
          <div className="delegates">
            <div className="tweetpic">
              <img
                src="./src/images/sarah.png"
                width={257}
                height={220}
                className="max"
              />
              <div className="tweetsss">
                <button className="tweets">
                  {" "}
                  <img src="./src/images/tweet.png" width={20} height={16.25} />
                </button>
              </div>
            </div>
            <h3>Sarah Johnson</h3>
            <p>Chief Real Estate Officer</p>
            <div className="sayshello">
              <div className="sayhellos">
                <h4>Say Hello</h4>
                <img src="./src/images/wave.png" width={36} height={36} />
              </div>
              <img src="./src/images/send.png" width={36} height={36} />
            </div>
          </div>
        </div>
        <div className="sups">
          <div className="delegates">
            <div className="tweetpic">
              <img
                src="./src/images/david.png"
                width={257}
                height={220}
                className="max"
              />
              <div className="tweetsss">
                <button className="tweets">
                  {" "}
                  <img src="./src/images/tweet.png" width={20} height={16.25} />
                </button>
              </div>
            </div>
            <h3>David Brown</h3>
            <p>Head of Property Management</p>
            <div className="sayshello">
              <div className="sayhellos">
                <h4>Say Hello</h4>
                <img src="./src/images/wave.png" width={36} height={36} />
              </div>
              <img src="./src/images/send.png" width={36} height={36} />
            </div>
          </div>
        </div>
        <div className="sups">
          <div className="delegates">
            <div className="tweetpic">
              <img
                src="./src/images/turner.png"
                width={257}
                height={220}
                className="max"
              />
              <div className="tweetsss">
                <button className="tweets">
                  {" "}
                  <img src="./src/images/tweet.png" width={20} height={16.25} />
                </button>
              </div>
            </div>
            <h3>Michael Turner</h3>
            <p>Legal Counsel</p>
            <div className="sayshello">
              <div className="sayhellos">
                <h4>Say Hello</h4>
                <img src="./src/images/wave.png" width={36} height={36} />
              </div>
              <img src="./src/images/send.png" width={36} height={36} />
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
          <h1>Our Valued Clients</h1>
          <div className="allProperties">
            <p className="xplore">
              At Estatein, we have had the privilege of working with a diverse
              range of clients across various industries. Here are some of the
              clients we've had<br></br> the pleasure of serving
            </p>
          </div>
        </div>
      </div>

      <div className="xpertises">
        <div className="xpertise">
          <div className="heros">
            <div className="ABCcorp">
              <div className="metro">
                <p>since 2019</p>
                <h3>ABC Corporation</h3>
              </div>
              <div className="sighting">
                <button className="visitsitess">Visit Website</button>
              </div>
            </div>

            <div className="juijutsus">
              <div className="domainexpansions">
                <div className="domainexpansion">
                  <img src="./src/images/Domain.png" width={20} height={20} />
                  <p>Domain</p>
                </div>
                <h4 className="commercialstate">Commercial Real Estate</h4>
              </div>
              <div className="domainexpansions">
                <div className="domainexpansion">
                  <img
                    src="./src/images/lightning.png"
                    width={20}
                    height={20}
                  />
                  <p>Category</p>
                </div>
                <h4 className="commercialstate">Luxury Home Development</h4>
              </div>
            </div>

            <div className="coded">
              <p>What They Said 🤗</p>
              <p className="cyncro">
                Estatein's expertise in finding the perfect office space for our
                <br></br>
                expanding operations was invaluable. They truly understand our
                <br></br> business needs.
              </p>
            </div>
          </div>
        </div>
        <div className="xpertise">
          <div className="heros">
            <div className="ABCcorprals">
              <div className="metro">
                <p>since 2019</p>
                <h3>GreenTech Enterprises</h3>
              </div>
              <div className="sighting">
                <button className="visitsitess">Visit Website</button>
              </div>
            </div>

            <div className="kingjuijutsus">
              <div className="domainexpansions">
                <div className="domainexpansion">
                  <img src="./src/images/Domain.png" width={20} height={20} />
                  <p>Domain</p>
                </div>
                <h4 className="commercialstate">Commercial Real Estate</h4>
              </div>
              <div className="domainexpansions">
                <div className="domainexpansion">
                  <img
                    src="./src/images/lightning.png"
                    width={20}
                    height={20}
                  />
                  <p>Category</p>
                </div>
                <h4 className="commercialstate">Retail Space</h4>
              </div>
            </div>

            <div className="procoded">
              <p>What They Said 🤗</p>
              <p className="cyncro">
                Estatein's ability to identify prime retail locations helped us
                expand<br></br> our brand presence. They are a trusted partner
                in our growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pages2">
        <p> 01 of 10 </p>
        <div className="pageBTNs">
          <button className="nextPage1">
            {" "}
            <img src="./src/images/arrow2.png" width={24} height={24}></img>
          </button>
          <button className="nextPage2">
            {" "}
            <img src="./src/images/arrow1.png" width={24} height={24}></img>
          </button>
        </div>
      </div>
      <div className="checkpropss">
        <h1>Start Your Real Estate Journey Today</h1>
        <div className="allProperties">
          <p className="xplore">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            <br></br> Estatein is here to assist you every step of the way. Take
            the first step towards your real estate goals and explore our
            available properties<br></br> or get in touch with our team for
            personalized assistance.
          </p>
          <button className="viewAllsss">Explore Properties</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default aboutUs;

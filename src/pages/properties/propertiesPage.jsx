import Header from "../../components/header/header";
import Stark from "../../components/Stars";
import Footer from "../../components/footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import property images
import prop1Img from "../../images/prop1.png";
import prop2Img from "../../images/prop2.png";
import prop3Img from "../../images/prop3.png";
import prop4Img from "../../images/prop4.png";
import prop5Img from "../../images/prop5.png";
import prop6Img from "../../images/prop6.png";
import prop7Img from "../../images/prop7.png";
import prop8Img from "../../images/prop8.png";
import prop9Img from "../../images/prop9.png";

// Import other images
import locateImg from "../../images/locate.png";
import villa2Img from "../../images/villa2.png";
import inhouseImg from "../../images/inhouse.png";
import arrow2Img from "../../images/arrow2.png";
import arrow1Img from "../../images/arrow1.png";
import bedroomImg from "../../images/bedroom.png";
import bathroomImg from "../../images/bathroom.png";
import areaImg from "../../images/area.png";
import lightningsImg from "../../images/lightnings.png";
import star1Img from "../../images/star1.png";
import star2Img from "../../images/star2.png";
import star3Img from "../../images/star3.png";

import "./propertiesPage.css";

function propertiesPage() {

  const [postings, setPostings] = useState();

  
  useEffect(() => {


    const fetchPostings = async () => {
      try {
        const response = await axios.get("https://real-estate-backend-nodejs-ywr4.onrender.com/api/v1/post/all");
        console.log("Data fetched successfully:", response);
        setPostings(response?.data?.Posts); // Update the state with the fetched data
      } catch (error) {
        const message = error.response?.data?.message ||
          (error.request ? "No response from server. Check your network."
            : "Unexpected error occurred.");
        console.error("Error:", message);
      }
    };






  return (
    <div>
      <Header />
      <div className="propertiesx">
        <div className="seasidex">
          <h3>Seaside Serenity Villa</h3>
          <div className="locationx">
            <img src={locateImg} width={13.75} height={16.87} alt="Location" />
            <p className="malibu">Malibu, California</p>
          </div>
        </div>
        <div className="pricex">
          <p className="marg">Price</p>
          <h3>$1,250,000</h3>
        </div>
      </div>

      <div className="tinypartment">
        <div className="classicman">
          <div className="better">
            <div className="badtguy">
              <div className="geniusYeah">
                <img src={prop1Img} width={122.22} height={74} alt="Property 1" />
                <img src={prop2Img} width={122.22} height={74} alt="Property 2" />
                <img src={prop3Img} width={122.22} height={74} alt="Property 3" />
                <img src={prop4Img} width={122.22} height={74} alt="Property 4" />
                <img src={prop5Img} width={122.22} height={74} alt="Property 5" />
                <img src={prop6Img} width={122.22} height={74} alt="Property 6" />
                <img src={prop7Img} width={122.22} height={74} alt="Property 7" />
                <img src={prop8Img} width={122.22} height={74} alt="Property 8" />
                <img src={prop9Img} width={122.22} height={74} alt="Property 9" />
              </div>
            </div>

            <div className="xproperties">
              <img src={villa2Img} width={585} height={507} alt="Villa 2" />
              <img src={inhouseImg} width={585} height={507} alt="In-house" />
            </div>
          </div>
        </div>

        <div className="history">
          <div className="howdy">
            <div className="noirarrows">
              <img
                src={arrow2Img}
                width={22}
                height={22}
                className="legolas"
                alt="Previous"
              />
              <div className="pageson">
                <button className="buttons" id="idisthis"></button>
                <button className="buttons"></button>
                <button className="buttons"></button>
                <button className="buttons"></button>
                <button className="buttons"></button>
                <button className="buttons"></button>
              </div>
              <img
                src={arrow1Img}
                width={22}
                height={22}
                className="legolas1"
                alt="Next"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="santabosses">
        <div className="santaboss">
          <div className="santafes">
            <div className="santafe">
              <h2 className="santa">Description</h2>
              <div className="descripx">
                <p>
                  Discover your own piece of paradise with the Seaside Serenity
                  Villa. T With an<br></br> open floor plan, breathtaking ocean
                  views from every room, and direct access<br></br> to a
                  pristine sandy beach, this property is the epitome of coastal
                  living.
                </p>
              </div>
            </div>

            <div className="geniusclass">
              <div className="giants" id="giantess">
                <div className="xprops">
                  <img src={bedroomImg} width={20} height={20} alt="Bedroom" />
                  <p>Bedrooms</p>
                </div>
                <h3 className="paragh">04</h3>
              </div>

              <div className="giants">
                <div className="xprops">
                  <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
                  <p>Bathroom</p>
                </div>
                <h3 className="paragh">03</h3>
              </div>

              <div className="giants">
                <div className="xprops">
                  <img src={areaImg} width={20} height={20} alt="Area" />
                  <p>Area</p>
                </div>
                <h3 className="paragh">2,500 Square Feet</h3>
              </div>
            </div>
          </div>

          <div className="bosslevelbadtguy">
            <h2>Key Features and Amenities</h2>

            <div className="betterthebest">
              <div className="betterbest">
                <img src={lightningsImg} width={20} height={20} alt="Lightning" />
                <p>Expansive oceanfront terrace for outdoor entertaining</p>
              </div>
              <div className="betterbest">
                <img src={lightningsImg} width={20} height={20} alt="Lightning" />
                <p>Gourmet kitchen with top-of-the-line appliances</p>
              </div>
              <div className="betterbest">
                <img src={lightningsImg} width={20} height={20} alt="Lightning" />
                <p>Private beach access for morning strolls and sunset views</p>
              </div>
              <div className="betterbest">
                <img src={lightningsImg} width={20} height={20} alt="Lightning" />
                <p>
                  Master suite with a spa-inspired bathroom and ocean-facing
                  <br></br> balcony
                </p>
              </div>
              <div className="betterbest">
                <img src={lightningsImg} width={20} height={20} alt="Lightning" />
                <p>Private garage and ample storage space</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="starkses">
        <Stark />
        <div className="youaregoodguy">
          <div className="historygood">
            <div className="omoguygood">
              <div className="inputs1">
                <div>
                  <h3>First Name</h3>
                  <input
                    placeholder="Enter First Name"
                    className="toogood"
                  ></input>
                </div>
                <div>
                  <h3>Last Name</h3>
                  <input
                    placeholder="Enter Last Name"
                    className="toogood"
                  ></input>
                </div>
              </div>
              <div className="inputs2">
                <div>
                  <h3>Email</h3>
                  <input placeholder="Enter Email" className="toogood"></input>
                </div>
                <div>
                  <h3>Phone number</h3>
                  <input
                    placeholder="Enter Phone Number"
                    className="toogood"
                  ></input>
                </div>
              </div>
            </div>
            <div className="selectmessages">
              <div>
                <h3>Selected Property</h3>
                <input
                  placeholder="Seaside Serenity Villa, Malibu, California"
                  className="toogoods"
                ></input>
              </div>
              <div>
                <h3>Message</h3>
                <input
                  placeholder="Enter Your Message Here"
                  className="toogoodss"
                ></input>
              </div>
            </div>
            <div className="wowzers">
              <div className="wowz">
                <input
                  type="checkbox"
                  width={24}
                  height={24}
                  className="checkboxess"
                ></input>
                <p>I agree with Terms of Use and Privacy Policy</p>
              </div>
              <button className="sendmessage">Send Your Message</button>
            </div>
          </div>
        </div>
      </div>

      <div className="starSign">
        <img src={star1Img} width={24} height={24} alt="Star 1" />
        <img src={star2Img} width={14.4} height={14.4} alt="Star 2" />
        <img src={star3Img} width={6.72} height={6.72} alt="Star 3" />
      </div>

      <div className="colors">
        <div className="checkprops">
          <h1>Comprehensive Pricing Details</h1>
          <div className="allProperties">
            <p className="xplore">
              At Estatein, transparency is key. We want you to have a clear
              understanding of all costs associated with your property
              investment. Below, we break down<br></br> the pricing for Seaside
              Serenity Villa to help you make an informed decision
            </p>
          </div>
        </div>
      </div>
      <div className="outstandingguy">
        <div className="figures2">
          <div className="notethefigures">
            <h3>Note</h3>
            <p>
              The figures provided above are estimates and may vary depending on
              the property, location, and individual circumstances.
            </p>
          </div>
        </div>
      </div>

      <div className="oboygood">
        <div className="pricesthebest">
          <div className="listingprice">
            <p>Listing Price</p>
            <h2>$1,250,000</h2>
          </div>
          <div className="mygoodness">
            <div className="greatguyman">
              <div className="additional">
                <h3>Additional Fees</h3>
                <button className="learnmore">Learn More</button>
              </div>
            </div>

            <div className="legalproperty">
              <div className="thebestyou">
                <p>Property Transfer Tax</p>
                <div className="dollars">
                  <h3>$25,000</h3>
                  <p>Based on the sale price and local regulations</p>
                </div>
              </div>

              <div className="thebestyou">
                <p>Legal Fees</p>
                <div className="dollars">
                  <h3>$3,000</h3>
                  <p>
                    Approximate cost for legal services, including title
                    transfer
                  </p>
                </div>
              </div>
            </div>
            <div className="legalproperties">
              <div className="thebestyou">
                <p>Home Inspection</p>
                <div className="dollars">
                  <h3>$500</h3>
                  <p>Recommended for due diligence</p>
                </div>
              </div>
              <div className="thebestyous">
                <p>Property Insurance</p>
                <div className="dollars">
                  <h3>$1,200</h3>
                  <p>Annual cost for comprehensive property insurance</p>
                </div>
              </div>
            </div>
            <div className="thebestyouss">
              <p>Mortgage Fees</p>
              <div className="dollars">
                <h3>Varies</h3>
                <p>
                  If applicable, consult with your lender for specific details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="geniusboss">
        <div className="mygoodnesss">
          <div className="greatguyman">
            <div className="additionalxxss">
              <h3>Monthly Costs</h3>
              <button className="learnmore">Learn More</button>
            </div>
          </div>

          <div className="legalproperty">
            <div className="thebestyou">
              <p>Property Taxes</p>
              <div className="dollars">
                <h3>$1,250</h3>
                <p>
                  Approximate monthly property tax based on the sale price and
                  local rates
                </p>
              </div>
            </div>
          </div>
          <div className="legalproperties">
            <div className="thebestyou">
              <p>Home Inspection</p>
              <div className="dollars">
                <h3>$500</h3>
                <p>Recommended for due diligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goodnaessgracious">
        <div className="mygoodnessx">
          <div className="greatguyman">
            <div className="additionalqxs">
              <h3>Total Initial Costs</h3>
              <button className="learnmore">Learn More</button>
            </div>
          </div>

          <div className="legalproperty">
            <div className="thebestyou">
              <p>Listing Price</p>
              <div className="dollars">
                <h3>$1,250,000</h3>
                <p>Based on the sale price and local regulations</p>
              </div>
            </div>

            <div className="thebestyou">
              <p>Additional Fees</p>
              <div className="dollars">
                <h3>$29,700</h3>
                <p>Property transfer tax, legal fees, inspection, insurance</p>
              </div>
            </div>
          </div>
          <div className="legalproperties">
            <div className="thebestyou">
              <p>Down Payment</p>
              <div className="dollars">
                <h3>$250,000</h3>
                <p>Recommended for due diligence</p>
              </div>
            </div>
            <div className="thebestyoussxx">
              <p>Mortgage Amount</p>
              <div className="dollars">
                <h3>$1,000,000</h3>
                <p>If applicable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="goodnaessgracious">
        <div className="mygoodnessx">
          <div className="greatguyman">
            <div className="additionalqxsx">
              <h3>Monthly Expenses</h3>
              <button className="learnmore">Learn More</button>
            </div>
          </div>

          <div className="legalproperty">
            <div className="thebestyou">
              <p>Property Taxes</p>
              <div className="dollars">
                <h3>$1,250</h3>
                <p>Based on the sale price and local regulations</p>
              </div>
            </div>

            <div className="thebestyouqsxq">
              <p>Homeowners&apos; Association Fee</p>
              <div className="dollars">
                <h3>$300</h3>
                <p>Property transfer tax, legal fees, inspection, insurance</p>
              </div>
            </div>
          </div>
          <div className="legalproperties">
            <div className="thebestyou">
              <p>Mortgage Payment</p>
              <div className="dollars">
                <p>Varies based on terms and interest rate</p>
                <p>If applicable</p>
              </div>
            </div>
            <div className="thebestyouqsxqs">
              <p>Property Insurance</p>
              <div className="dollars">
                <h3>$100</h3>
                <p>Approximate monthly cost</p>
              </div>
            </div>
          </div>
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
              Find answers to common questions about Estatein&apos;s services,
              property listings, and the real estate process. We&apos;re here to
              provide clarity and<br></br> assist you every step of the way.
            </p>
            <button className="viewAll">View all FAQs</button>
          </div>
        </div>

        <div className="qwertysp">
          <div className="qwertys">
            <h3>
              How do I search for properties on<br></br> Estatein?
            </h3>
            <p className="learnHow">
              Learn how to use our user-friendly search tools<br></br>
              to find properties that match your criteria.
            </p>
            <button className="viewAlls1"> Read More</button>
          </div>
          <div className="qwertys">
            <h3>
              What documents do I need to sell my<br></br> property through
              Estatein?
            </h3>
            <p className="learnHow">
              Find out about the necessary documentation <br></br>
              for listing your property with us.
            </p>
            <button className="viewAlls1"> Read More</button>
          </div>
          <div className="qwertys">
            <h3>How can I contact an Estatein agent?</h3>
            <p className="learnHows">
              Discover the different ways you can get in touch<br></br>
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
            {" "}
            <img src={arrow2Img} width={24} height={24} alt="Previous"></img>
          </button>
          <button className="nextPage2">
            {" "}
            <img src={arrow1Img} width={24} height={24} alt="Next"></img>
          </button>
        </div>
      </div>

      <div className="checkpropss">
        <h1>Start Your Real Estate Journey Today</h1>
        <div className="allProperties">
          <p className="xplore">
            Your dream property is just a click away. Whether you&apos;re looking for
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
}

export default propertiesPage;

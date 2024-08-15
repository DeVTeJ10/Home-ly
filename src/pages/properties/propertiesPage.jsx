import React from "react";
import Header from "../../components/header";
import Stark from "../../components/Stars/indexmax";
import Footer from "../../components/Footer";
import "./propertiesPage.css";

function propertiesPage() {
  return (
    <div>
      <Header />
      <div className="propertiesx">
        <div className="seasidex">
          <h3>Seaside Serenity Villa</h3>
          <div className="locationx">
            <img src="./src/images/locate.png" width={13.75} height={16.87} />
            <p className="malibu">Malibu, Carlifonia</p>
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
                <img src="./src/images/prop1.png" width={122.22} height={74} />
                <img src="./src/images/prop2.png" width={122.22} height={74} />
                <img src="./src/images/prop3.png" width={122.22} height={74} />
                <img src="./src/images/prop4.png" width={122.22} height={74} />
                <img src="./src/images/prop5.png" width={122.22} height={74} />
                <img src="./src/images/prop6.png" width={122.22} height={74} />
                <img src="./src/images/prop7.png" width={122.22} height={74} />
                <img src="./src/images/prop8.png" width={122.22} height={74} />
                <img src="./src/images/prop9.png" width={122.22} height={74} />
              </div>
            </div>

            <div className="xproperties">
              <img src="./src/images/villa2.png" width={585} height={507} />
              <img src="./src/images/inhouse.png" width={585} height={507} />
            </div>
          </div>
        </div>

        <div className="history">
          <div className="howdy">
            <div className="noirarrows">
              <img
                src="./src/images/arrow2.png"
                width={22}
                height={22}
                className="legolas"
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
                src="./src/images/arrow1.png"
                width={22}
                height={22}
                className="legolas1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="santabosses">
        <div className="santaboss">
          {/* <div className="goodyeah"> */}
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
                  <img src="./src/images/bedroom.png" width={20} height={20} />
                  <p>Bedrooms</p>
                </div>
                <h3 className="paragh">04</h3>
              </div>

              <div className="giants">
                <div className="xprops">
                  <img src="./src/images/bathroom.png" width={20} height={20} />
                  <p>Bathroom</p>
                </div>
                <h3 className="paragh">03</h3>
              </div>

              <div className="giants">
                <div className="xprops">
                  <img src="./src/images/area.png" width={20} height={20} />
                  <p>Area</p>
                </div>
                <h3 className="paragh">2,500 Square Feet</h3>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="bosslevelbadtguy">
            <h2>Key Features and Amenities</h2>

            <div className="betterthebest">
              <div className="betterbest">
                <img src="./src/images/lightnings.png" width={20} height={20} />
                <p>Expansive oceanfront terrace for outdoor entertaining</p>
              </div>
              <div className="betterbest">
                <img src="./src/images/lightnings.png" width={20} height={20} />
                <p>Gourmet kitchen with top-of-the-line appliances</p>
              </div>
              <div className="betterbest">
                <img src="./src/images/lightnings.png" width={20} height={20} />
                <p>Private beach access for morning strolls and sunset views</p>
              </div>
              <div className="betterbest">
                <img src="./src/images/lightnings.png" width={20} height={20} />
                <p>
                  Master suite with a spa-inspired bathroom and ocean-facing
                  <br></br> balcony
                </p>
              </div>
              <div className="betterbest">
                <img src="./src/images/lightnings.png" width={20} height={20} />
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
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
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
      <div>
      </div>


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
              <p>Approximate monthly property tax based on the sale price and local rates</p>
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
                  <p>
                  Property transfer tax, legal fees, inspection, insurance
                  </p>
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
                <p>Homeowners' Association Fee</p>
                <div className="dollars">
                  <h3>$300</h3>
                  <p>
                  Property transfer tax, legal fees, inspection, insurance
                  </p>
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
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
      </div>

      <div className="colors">
        <div className="checkprops">
          <h1>Frequently Asked Questions</h1>
          <div className="allProperties">
            <p className="xplore">
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
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
}

export default propertiesPage;

import React from "react";
import Header from "../../components/header";
import DreamHome from "../../components/DreamHome";
import Footer from "../../components/Footer"
import "./servicesPage.css";

const servicesPage = () => {
  return (
    <div>
      <Header />
      <div className="ElevateGem">
        <div className="Gemini">
          <h1 className="Elevate">Elevate Your Real Estate Experience</h1>
          <p>
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique<br></br> needs and dreams.
          </p>
        </div>
        {/* <DreamHome /> */}
        <div className="dreamhomesxq">
          <div className="find">
            <img src="./src/images/try.png" width={60} height={60} />
            <p className="dreamHome"> Find Your Dream Home </p>
          </div>
          <div className="unlock">
            <img src="./src/images/property.png" width={60} height={60} />
            <p className="dreamHome"> Unlock Property Value </p>
          </div>
          <div className="management">
            <img src="./src/images/try.png" width={60} height={60} />
            <p className="dreamHome"> Effortless Property Management </p>
          </div>
          <div className="investment">
            <img src="./src/images/try.png" width={60} height={60} />
            <p className="dreamHome"> Smart Investments, Informed Decisions </p>
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
              Selling your property should be a rewarding experience, and at
              Estatein, we make sure it is. Our Property Selling Service is
              designed to maximize<br></br> the value of your property, ensuring
              you get the best deal possible. Explore the categories below to
              see how we can help you at every step of your<br></br> selling
              journey
            </p>
          </div>
        </div>
      </div>
      <div className="mastervalue">
        <div className="valuemastery">
          <div className="valuation">
            <img src="./src/images/valuation.png" width={60} height={60} />
            <h3>Valuation Mastery</h3>
          </div>
          <p>
            Discover the true worth of your property with<br></br> our expert
            valuation services.
          </p>
        </div>
        <div className="valuemastery">
          <div className="valuation">
            <img src="./src/images/strategic.png" width={60} height={60} />
            <h3>Strategic Marketing</h3>
          </div>
          <p>
            Selling a property requires more than just a<br></br> listing; it
            demands a strategic marketing.
          </p>
        </div>
        <div className="valuemastery">
          <div className="valuation">
            <img src="./src/images/wizardry.png" width={60} height={60} />
            <h3>Negotiation Wizardry</h3>
          </div>
          <p>
            Negotiating the best deal is an art, and our<br></br> negotiation
            experts are masters of it.
          </p>
        </div>
      </div>

      <div className="masterysuccess">
        <div className="valuemasterys">
          <div className="valuation">
            <img src="./src/images/success.png" width={60} height={60} />
            <h3>Closing Success</h3>
          </div>
          <p>
            A successful sale is not complete until the<br></br> closing. We
            guide you through the intricate<br></br> closing process.
          </p>
        </div>

        <div className="valuemasteries">
          <div className="valuations">
            <h3>Unlock the Value of Your Property Today</h3>
            <button className="masterchef">Learn More</button>
          </div>
          <p>
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </div>
      </div>
      <div className="starSigns">
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
      </div>

      <div>
        <div className="clientFeedbacks">
          <h1> Effortless Property Management </h1>
          <div className="clientSay">
            <p className="success">
              Owning a property should be a pleasure, not a hassle. Estatein's
              Property Management Service takes the stress out of property
              ownership, offering<br></br> comprehensive solutions tailored to
              your needs. Explore the categories below to see how we can make
              property management effortless for you
            </p>
          </div>
        </div>
      </div>
      <div className="mastervalue">
        <div className="valuemastery">
          <div className="valuation">
            <img src="./src/images/harmony.png" width={60} height={60} />
            <h3>Tenant Harmony</h3>
          </div>
          <p>
            Our Tenant Management services ensure that<br></br> your tenants
            have a smooth and reducing<br></br> vacancies.
          </p>
        </div>
        <div className="valuemastery">
          <div className="valuation">
            <img src="./src/images/maintainance.png" width={60} height={60} />
            <h3>Maintenance Ease</h3>
          </div>
          <p>
            Selling a property requires more than just a<br></br> listing; it
            demands a strategic marketing.
          </p>
        </div>
        <div className="valuemastery">
          <div className="valuation">
            <img src="./src/images/financial.png" width={60} height={60} />
            <h3>Financial Peace of Mind</h3>
          </div>
          <p>
            Managing property finances can be complex.<br></br> Our financial
            experts take care of rent<br></br> collection
          </p>
        </div>
      </div>

      <div className="masterysuccess">
        <div className="valuemasterys">
          <div className="valuation">
            <img src="./src/images/guardian.png" width={60} height={60} />
            <h3>Legal Guardian</h3>
          </div>
          <p>
            Stay compliant with property laws and<br></br> regulations
            effortlessly.
          </p>
        </div>

        <div className="valuemasteries">
          <div className="valuations">
            <h3>Experience Effortless Property Management</h3>
            <button className="masterchef">Learn More</button>
          </div>
          <p>
            Ready to experience hassle-free property management? Explore our
            Property Management Service<br></br>
            categories and let us handle the complexities while you enjoy the
            benefits of property ownership.
          </p>
        </div>
      </div>

      <div className="youarethebestguy">
        <div className="guybadoo">
          <div className="starSigns">
            <img src="./src/images/star1.png" width={24} height={24} />
            <img src="./src/images/star2.png" width={14.4} height={14.4} />
            <img src="./src/images/star3.png" width={6.72} height={6.72} />
          </div>

          <div>
            <div className="clientFeedbacks">
              <h1>
                {" "}
                Smart Investments,<br></br> Informed Decisions{" "}
              </h1>
              <div className="clientSay">
                <p className="success">
                  Building a real estate portfolio requires a strategic<br></br>{" "}
                  approach. Estatein's Investment Advisory Service<br></br>{" "}
                  empowers you to make smart investments and informed<br></br>{" "}
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="unlocksvestments">
            <div className="superstarguy">
            <div className="unlockinvestment">
            <h3>Unlock Your Investment Potential</h3>
            <p>
              Explore our Property Management Service<br></br> categories and
              let us handle the complexities<br></br> while you enjoy the
              benefits of property<br></br> ownership.
            </p>
            <button className="learningmore">Learn More</button>
          </div>
            </div>

        <div className="thankyouGod">
        <div className="classicmangee">
            <div className="marketROI">
              <div className="insightmark">
                <div className="markinsight">
                  <img src="./src/images/insight.png" width={60} height={60} />
                  <h3>Market Insight</h3>
                </div>
                <p>
                  Stay ahead of market trends with our<br></br> expert Market
                  Analysis. We provide in-depth<br></br> insights into real
                  estate market conditions
                </p>
              </div>
              <div className="insightmark">
                <div className="markinsight">
                  <img
                    src="./src/images/assesment.png"
                    width={60}
                    height={60}
                  />
                  <h3>ROI Assessment</h3>
                </div>
                <p>
                  Make investment decisions with confidence.<br></br>
                  Our ROI Assessment services evaluate<br></br> the potential
                  returns on your investments
                </p>
              </div>
            </div>
            <div className="marketROs">
              <div className="insightmark">
                <div className="markinsight">
                  <img src="./src/images/ideas.png" width={60} height={60} />
                  <h3>Customized Strategies</h3>
                </div>
                <p>
                  Every investor is unique, and so are their<br></br> goals. We
                  develop Customized Investment<br></br> Strategies tailored to
                  your specific needs
                </p>
              </div>
              <div className="insightmark">
                <div className="markinsight">
                  <img
                    src="./src/images/assesment.png"
                    width={60}
                    height={60}
                  />
                  <h3>Diversification Mastery</h3>
                </div>
                <p>
                  Diversify your real estate portfolio<br></br> effectively. Our
                  experts guide you in<br></br> spreading your investments
                  across various<br></br>
                  property types and locations
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="checkpropssqsx">
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

export default servicesPage;

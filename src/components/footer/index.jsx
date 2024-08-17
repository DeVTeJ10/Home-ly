import "./footer.css";
import logoImg from "../../images/Logo.png";
import planarImg from "../../images/planar.png";
import postmanImg from "../../images/postman.png";

const index = () => {
  return (
    <div>
      <div className="finalfooter">
        <div className="sentient">
          <div className="logo2s">
            <img src={logoImg} width={113.33} height={34} className="logossss" alt="Logo"/>
            <div className="dinosaurs">
            <input placeholder="Enter Your Email" className="gangstacode" type="email"></input>
          </div>
          <img src={planarImg} width={24} height={24} className="planar" alt="Planar"/>
          <img src={postmanImg} width={24} height={24} className="postman" alt="Postman"/>
            </div>
        </div>

        <div className="mailedit">

        </div>

        <div className="features1">
          <div className="features">
            <p className="topss">Home</p>
            <p className="mavericks">Hero Section</p>
            <p className="mavericks">Features</p>
            <p className="mavericks">Properties</p>
            <p className="mavericks">Testimonials</p>
            <p className="mavericks">FAQs</p>
          </div>
        </div>
        <div className="features1">
          <div className="features">
            <p className="topss">About Us</p>
            <p className="mavericks">Our Story</p>
            <p className="mavericks">Our Works</p>
            <p className="mavericks">How It Works</p>
            <p className="mavericks">Our Team</p>
            <p className="mavericks">Our Clients</p>
          </div>
        </div>
        <div className="features1">
          <div className="features">
            <p className="topss">Properties</p>
            <p className="mavericks">Portfolios</p>
            <p className="mavericks">categories</p>
          </div>
        </div>
        <div className="features1">
          <div className="features">
            <p className="topss">Services</p>
            <p className="mavericks">Valuation Mastery</p>
            <p className="mavericks">Strategic Marketing</p>
            <p className="mavericks">Negotiation Wizardry</p>
            <p className="mavericks">Closing Success</p>
            <p className="mavericks">Property Management</p>
          </div>
        </div>
        <div className="features1">
          <div className="features">
            <p className="topss">Contact Us</p>
            <p className="mavericks"> Contact Form</p>
            <p className="mavericks">Our Offices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
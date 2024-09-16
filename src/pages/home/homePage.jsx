import Header from "../../components/header/header";
import FooterComponent from "../../components/footer";
import DreamHome from "../../components/dreamHome";
import checkImg from "../../images/Container.png";
import "./homePage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";


// Import all images
import circogoImg from "../../images/circogo.png";
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


const HomePage = () => {

  const [Posts, setPosts] = useState({

      _id: '',
      title: '',
      slug: '',
      price: '',
      image: '',
      description: '',
      address: '',
      city: '',
      bedroom: '',
      bathroom: '',
      latitude: '',
      longitude: '',
      type: '',
      property: '',
      userId: [
        
      ]

  });


  useEffect(() => {
    const postDataForm = JSON.parse(localStorage.getItem('posts'));
    if (postDataForm) {
        setPosts(postDataForm);
    }
}, []); // Add dependency array



// useEffect(() => {
//   const postDataForm = JSON.parse(localStorage.getItem('dataform'));
//   if (postDataForm && postDataForm.email) {
//     setPosts(prevState => ({
//       ...prevState,
//       email: savedDataForm.email
//     }));
//   }
// }, []);



    const token = localStorage.getItem("Authtoken")
    console.log(token)

  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://real-estate-backend-nodejs-ywr4.onrender.com/post/all', {
        headers: {  // Corrected key here
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, ); // Dependency on token
  

  return (
    <div>
      <Header />
      <div className="hello">
        <div className="Discover">
          <h1 className="Dream">
            Discover your Dream <br></br> Property with Estatein
          </h1>
          <p className="journey">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the <br></br> home that matches your dreams.
          </p>
          <div className="learnProperties">
            <button className="learnMore"> Learn more </button>
            <Link to={"/create-post"}>
            <button className="browseProp"> Browse properties </button>
            </Link>
          </div>
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
        <img src={checkImg} width={690} height={622} alt="Check" />
      </div>
      <DreamHome />
      <img
        src={circogoImg}
        width={129}
        height={129}
        className="type"
        alt="Circogo"
      />
      <div className="starSign">
        <img src={star1Img} width={24} height={24} alt="Star 1" />
        <img src={star2Img} width={14.4} height={14.4} alt="Star 2" />
        <img src={star3Img} width={6.72} height={6.72} alt="Star 3" />
      </div>

      <div className="checkprops">
        <h1>Featured Properties</h1>
        <div className="allProperties">
          <p className="xplore">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available<br></br>through Estatein. Click View Details for more
            information.
          </p>
          <button className="viewAll">View All Properties</button>
        </div>
      </div>

      <div className="allforone">
        <div className="oneforall">
          <img
            src={villaImg}
            value={Posts.image}
            // onChange={handleChange}
            width={353.33}
            height={255}
            className="cottage"
            alt="Villa"
          />
          <h3 className="seaside">Seaside Serenity Villa</h3>
          <p className="stunning">
            A stunning 4-bedroom, 3-bathroom villa in a <br></br>peaceful
            suburban neighborhood... <b>Read More</b>
          </p>
          <div className="whatif">
            <div className="propteristics">
              <img src={bedroomImg}
              value={Posts.image}
              // onChange={handleChange} 
              width={20} 
              height={20} 
              alt="Bedroom" />
              <h4> 4-Bedroom </h4>
            </div>
            <div className="bathroom">
              <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
              <h4> 3-Bathroom </h4>
            </div>
            <div className="villa2">
              <img src={villa2Img} width={20} height={20} alt="Villa 2" />
              <h4> Villa </h4>
            </div>
          </div>
          <div className="qwert">
            <div>
              <p> Price </p>
              <p className="hundred">$550,000</p>
            </div>
            <button className="viewprop">View Property Details</button>
          </div>
        </div>

        <div className="oneforall">
          <img
            src={havenImg}
            width={353.33}
            height={255}
            className="cottage"
            alt="Haven"
          />
          <h3 className="seaside">Metropolitan Haven</h3>
          <p className="stunning">
            A stunning 4-bedroom, 3-bathroom villa in a <br></br>peaceful
            suburban neighborhood... <b>Read More</b>
          </p>
          <div className="whatif">
            <div className="propteristics">
              <img src={bedroomImg} width={20} height={20} alt="Bedroom" />
              <h4> 2-Bedroom </h4>
            </div>
            <div className="bathroom">
              <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
              <h4> 2-Bathroom </h4>
            </div>
            <div className="villa2">
              <img src={villa2Img} width={20} height={20} alt="Villa 2" />
              <h4> Villa </h4>
            </div>
          </div>
          <div className="qwert">
            <div>
              <p> Price </p>
              <p className="hundred">$550,000</p>
            </div>
            <button className="viewprop">View Property Details</button>
          </div>
        </div>

        <div className="oneforall">
          <img
            src={cottageImg}
            width={353.33}
            height={255}
            className="cottage"
            alt="Cottage"
          />
          <h3 className="seaside">Rustic Retreat Cottage</h3>
          <p className="stunning">
            A stunning 4-bedroom, 3-bathroom villa in a <br></br>peaceful
            suburban neighborhood... <b>Read More</b>
          </p>
          <div className="whatif">
            <div className="propteristics">
              <img src={bedroomImg} width={20} height={20} alt="Bedroom" />
              <h4> 3-Bedroom </h4>
            </div>
            <div className="bathroom">
              <img src={bathroomImg} width={20} height={20} alt="Bathroom" />
              <h4> 3-Bathroom </h4>
            </div>
            <div className="villa2">
              <img src={villa2Img} width={20} height={20} alt="Villa 2" />
              <h4> Villa </h4>
            </div>
          </div>
          <div className="qwert">
            <div>
              <p> Price </p>
              <p className="hundred">$550,000</p>
            </div>
            <button className="viewprop">View Property Details</button>
          </div>
        </div>
      </div>

      <div className="pages">
        <p> 01 of 60 </p>
        <div className="pageBTNs">
          <button className="nextPage1">``
            <img src={arrow2Img} width={24} height={24} alt="Previous" />
          </button>
          <button className="nextPage2">
            <img src={arrow1Img} width={24} height={24} alt="Next" />
          </button>
        </div>
      </div>
      <div className="starSigns">
        <img src={star1Img} width={24} height={24} alt="Star 1" />
        <img src={star2Img} width={14.4} height={14.4} alt="Star 2" />
        <img src={star3Img} width={6.72} height={6.72} alt="Star 3" />
      </div>

      <div className="clientFeedback">
        <h1> What Our Clients Say </h1>
        <div className="clientSay">
          <p className="success">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <button className="viewAlls">View All Testimonials</button>
        </div>
      </div>

      <div className="checkthis">
        <div className="starComps">
          <div className="stars">
            <img
              src={stars1Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 1"
            />
            <img
              src={stars2Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 2"
            />
            <img
              src={stars3Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 3"
            />
            <img
              src={stars4Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 4"
            />
            <img
              src={stars5Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 5"
            />
          </div>

          <div className="qwerty">
            <h3>Exceptional Service!</h3>
            <p>
              Our experience with Estatein was outstanding.<br></br> Their
              team&apos;s dedication and professionalism<br></br> made finding our
              dream home a breeze. Highly<br></br> recommended!
            </p>
          </div>
          <div className="clientss">
            <img src={wadeImg} width={50} height={50} alt="Wade Warren" />
            <div className="">
              <p>Wade Warren</p>
              <p>USA, California</p>
            </div>
          </div>
        </div>
        <div className="starComps">
          <div className="stars">
            <img
              src={stars1Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 1"
            />
            <img
              src={stars2Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 2"
            />
            <img
              src={stars3Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 3"
            />
            <img
              src={stars4Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 4"
            />
            <img
              src={stars5Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 5"
            />
          </div>
          <div className="qwerty">
            <h3>Efficient and Reliable</h3>
            <p>
              Estatein provided us with top-notch service.<br></br>
              They helped us sell our property quickly and at <br></br>a great
              price. We couldn&apos;t be happier with the <br></br>results.
            </p>
          </div>
          <div className="clientss">
            <img src={emelieImg} width={50} height={50} alt="Emelie Thomson" />
            <div className="">
              <p>Emelie Thomson</p>
              <p>USA, Florida</p>
            </div>
          </div>
        </div>
        <div className="starComps">
          <div className="stars">
            <img
              src={stars1Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 1"
            />
            <img
              src={stars2Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 2"
            />
            <img
              src={stars3Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 3"
            />
            <img
              src={stars4Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 4"
            />
            <img
              src={stars5Img}
              width={20}
              height={20}
              className="starks"
              alt="Star 5"
            />
          </div>
          <div className="qwerty">
            <h3>Trusted Advisors</h3>
            <p>
              The Estatein team guided us through the entire<br></br> buying
              process. Their knowledge and<br></br> commitment to our needs were
              impressive.<br></br>
              Thank you for your support!
            </p>
          </div>
          <div className="clientss">
            <img src={johnImg} width={50} height={50} alt="John Mans" />
            <div className="">
              <p>John Mans</p>
              <p>USA, Nevada</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pages1">
        <p> 01 of 10 </p>
        <div className="pageBTNs">
          <button className="nextPage1">
            <img src={arrow2Img} width={24} height={24} alt="Previous" />
          </button>
          <button className="nextPage2">
            <img src={arrow1Img} width={24} height={24} alt="Next" />
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
            <img src={arrow2Img} width={24} height={24} alt="Previous" />
          </button>
          <button className="nextPage2">
            <img src={arrow1Img} width={24} height={24} alt="Next" />
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
      <FooterComponent />
    </div>
  );
};

export default HomePage;

import { Link } from 'react-router-dom'
import "./stars.css"

export const index = () => {
  return (
    <div>
      <div className="starcomps">
      <div className="starboys">
        <img src="./src/images/star1.png" width={24} height={24} />
        <img src="./src/images/star2.png" width={14.4} height={14.4} />
        <img src="./src/images/star3.png" width={6.72} height={6.72} />
      </div>

      <div className="">
        <h1> Inquire About Seaside<br></br> Serenity Villa </h1>
        <div className="">
          <p className="">
          Interested in this property? Fill out the form below, and our<br></br> 
          real estate experts will get back to you with more details,<br></br>
          including scheduling a viewing and answering any<br></br> questions you may have.
          </p>
        </div>
             </div>
      </div>
        </div>
  );
};
export default index;
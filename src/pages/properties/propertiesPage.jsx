import React from "react";
import Header from "../../components/Header/index";
import Stark from "../../components/Stark/indexmax";
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
      <Stark />
    </div>
  );
}

export default propertiesPage;

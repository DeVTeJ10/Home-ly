import React from 'react'
import Header from "../../components/Header/index";
import "./propertiesPage.css"


function propertiesPage() {
  return (
    <div>
        <Header />
      <div className='propertiesx'>
        <div className='seasidex'>
        <h3>Seaside Serenity Villa</h3>
        <div className='locationx'>
        <img src='./src/images/locate.png' width={13.75} height={16.87} />
        <p>Malibu, Carlifonia</p>
        </div>
        </div>
        <div className='pricex'>
        <p className='marg'>Price</p>
        <h3>$1,250,000</h3>
        </div>
      </div>

    <div className='classicman'>
    <div className='better'>
    <div className='badtguy'>
    <div className='geniusYeah'>
          <img src='./src/images/prop1.png' width={122.22} height={74} />
          <img src='./src/images/prop2.png' width={122.22} height={74} />
          <img src='./src/images/prop3.png' width={122.22} height={74} />
          <img src='./src/images/prop4.png' width={122.22} height={74} />
          <img src='./src/images/prop5.png' width={122.22} height={74} />
          <img src='./src/images/prop6.png' width={122.22} height={74} />
          <img src='./src/images/prop7.png' width={122.22} height={74} />
          <img src='./src/images/prop8.png' width={122.22} height={74} />
          <img src='./src/images/prop9.png' width={122.22} height={74} />
        </div>
    </div>

        <div className='xproperties'>
          <img src='./src/images/villa2.png' width={585} height={507}/>
          <img src='./src/images/inhouse.png' width={585} height={507} />
        </div>
    </div>
    </div>
    </div>
  )
}

export default propertiesPage
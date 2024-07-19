import React from 'react'
import './dreamHome.css'



const index = () => {
  return (
    <div>
        <div className='dreamhomes'>
            <div className='find'>
                <img src="./src/images/try.png" width={60} height={60} />
                <p className='dreamHome'> Find Your Dream Home </p>
            </div>
            <div className='unlock'>
                <img src="./src/images/property.png" width={60} height={60}/>
                <p className='dreamHome'> Unlock Property Value </p>
            </div>
            <div className='management'>
                <img src="./src/images/try.png" width={60} height={60}/>
                <p className='dreamHome'> Effortless Property Management </p>
            </div>
            <div className='investment'>
                <img src="./src/images/try.png" width={60} height={60}/>
                <p className='dreamHome'> Smart Investments, Informed Decisions </p>
            </div>
        </div>
    </div>
  )
}

export default index

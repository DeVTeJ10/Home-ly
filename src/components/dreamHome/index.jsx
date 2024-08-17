import './dreamHome.css'

// Import all the images
import tryImg from '../../images/try.png'
import propertyImg from '../../images/property.png'

const index = () => {
  return (
    <div>
        <div className='dreamhomes'>
            <div className='find'>
                <img src={tryImg} width={60} height={60} alt="Find" />
                <p className='dreamHome'> Find Your Dream Home </p>
            </div>
            <div className='unlock'>
                <img src={propertyImg} width={60} height={60} alt="Unlock" />
                <p className='dreamHome'> Unlock Property Value </p>
            </div>
            <div className='management'>
                <img src={tryImg} width={60} height={60} alt="Management" />
                <p className='dreamHome'> Effortless Property Management </p>
            </div>
            <div className='investment'>
                <img src={tryImg} width={60} height={60} alt="Investment" />
                <p className='dreamHome'> Smart Investments, Informed Decisions </p>
            </div>
        </div>
    </div>
  )
}

export default index
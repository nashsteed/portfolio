import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'

import testBG from '../../assets/images/nashSteed.png'

const Contact2 = () => {
  const [letterClass, setLetterClass] = useState('text-hidden') // Start hidden
  const [isLoaded, setIsLoaded] = useState(false) // Track if fully loaded

  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N', ' ', '+', ' ', 'M', 'U', 'S', 'I', 'C']

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate') // Apply animation after delay
    }, 500) // Adjust delay as needed

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  return (
    <>
      <div className="home-page2">
        <img 
          src={testBG} 
          alt="Nash Steed"
          onLoad={() => setIsLoaded(true)} // Ensure image loads before animation
        />
        {isLoaded && ( // Ensure animation only starts after image loads
          <div>
            <h3>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
            </h3>

            <div className="flat-square-contact">
                <h4>EMAIL: NASHSTEED13@GMAIL.COM</h4>
                <h4>PHONE: (804) 219-7366</h4>
                </div>
            
            <div className='buttons'>
              <Link to="/contact" className="flat-button3 right2">LinkedIn</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Contact2

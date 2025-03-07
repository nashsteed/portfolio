import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './Home2.scss'

import testBG from '../../assets/images/nashSteed.png'

const Home2 = () => {
  const [letterClass, setLetterClass] = useState('text-hidden') // Start hidden
  const [isLoaded, setIsLoaded] = useState(false) // Track if fully loaded

  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N', ',', ' ', 'W', 'E', 'B', ' ', 'D', 'E','V','E','L','O','P','E','R']

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
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={4} />
            </h3>
            <div className='buttons'>
              <Link to="/about" className="flat-button3 left2">About</Link>
              <Link to="/portfolio" className="flat-button3 center2">Portfolio</Link>
              <Link to="/contact" className="flat-button3 right2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Home2

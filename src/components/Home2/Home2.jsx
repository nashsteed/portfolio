import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './Home2.scss'

import testBG from '../../assets/images/nashSteed.webp'
import label from '../../assets/images/NASH FONT LABEL.webp'

const Home2 = () => {
  const [letterClass, setLetterClass] = useState('text-hidden') // Start hidden
  const [isLoaded, setIsLoaded] = useState(false) // Track if fully loaded
  const [filterValue, setFilterValue] = useState(0)
  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N','E','R', ' & ', 'W', 'E', 'B', ' ', 'D', 'E','V','E','L','O','P','E','R']

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => {
        setLetterClass('text-animate') // Apply animation after delay
      }, 1000) // Delay everything by 1 second

      return () => clearTimeout(timeout) // Cleanup timeout
    }
  }, [isLoaded])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate') // Apply animation after delay
    }, 750) // Adjust delay as needed

    return () => clearTimeout(timeout) // Cleanup timeout
  }, [])

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Create a hue-rotate effect based on mouse movement
    const hueRotate = ((clientX - centerX) / centerX) * 40 // Range: -40deg to 40deg
    const brightness = 1 + ((clientY - centerY) / centerY) * 0.2 // Range: 0.8 to 1.2

    setFilterValue({ hueRotate, brightness })
  }

  return (
    <>
      <div className="home-page2">
        <img className = "bg"
          src={testBG} 
          alt="Nash Steed"
          style={{
            filter: `hue-rotate(${filterValue.hueRotate}deg) brightness(${filterValue.brightness})`
          }}
          onLoad={() => setIsLoaded(true)} // Ensure image loads before animation
        />
        <div className="color-overlay"></div>
        {/* <img className="label-name" 
          src={label} 
          alt="Nash Steed"
          onLoad={() => setIsLoaded(true)} // Ensure image loads before animation
        /> */}
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

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import testBG from '../../assets/images/testBG.webp'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-hidden') // Start hidden
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [grayscale, setGrayscale] = useState(0)
  const [brightness, setBrightness] = useState(22)
  const [isLoaded, setIsLoaded] = useState(false)

  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N', ' ', '+', ' ', 'M', 'U', 'S', 'I', 'C']

  useEffect(() => {
    if (!isLoaded) return // Prevent animations from starting early

    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 100
      const yPercent = (e.clientY / window.innerHeight) * 100

      setMousePosition({ x: xPercent, y: yPercent })

      const distanceFromCenter = Math.sqrt(
        Math.pow(xPercent - 50, 2) + Math.pow(yPercent - 50, 2)
      )

      const exponent = 2
      const grayscale = Math.min(100, Math.pow(distanceFromCenter / 50, exponent) * 100)
      const brightness = 10 + (grayscale / 100) * 10

      setBrightness(brightness)
      setGrayscale(grayscale)
    }

    // Ensure animation only starts after everything is loaded
    const timeout = setTimeout(() => {
      setLetterClass('text-animate')
    }, 500) // Delay animation for smooth effect

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [isLoaded])

  return (
    <>
      <div 
        className="home-page" 
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease-in-out" }} // Prevent early rendering
      >
        <div
      className={`background-image ${isLoaded ? 'background-visible' : 'background-hidden'}`}
      style={{ 
       transform: `translate(${(mousePosition.x - 50) / 50}%, ${(mousePosition.y - 50) / 50}%)`,
        filter: `brightness(${brightness}%) blur(0px)`,
  }}
>
          <div className="grid-item">
            <img
              rel="preload"
              src={testBG}
              alt="Work 1"
              onLoad={() => setIsLoaded(true)} // Ensure full loading
              onError={() => console.error("Image failed to load")}
            />
          </div>
        </div>

        {/* Ensure text doesn't render until everything is loaded */}
        {isLoaded && (
          <div className="text-zone">
            <h1>NASH STEED</h1>
            {isLoaded && (
  <h3>
    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
  </h3>
)}
            <div className='buttons'>
              <Link to="/about" className="flat-button left">About</Link>
              <Link to="/portfolio" className="flat-button center">Portfolio</Link>
              <Link to="/contact" className="flat-button right">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Home

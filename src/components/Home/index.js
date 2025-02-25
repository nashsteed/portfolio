import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import testBG from '../../assets/images/testBG.webp'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [grayscale, setGrayscale] = useState(0)
  const [brightness, setBrightness] = useState(22)
  const [opacity, setOpacity] = useState(0) // Start fully grayscale

  const jobArray = ['G', 'R', 'A', 'P', 'H', 'I', 'C', ' ', 'D', 'E', 'S', 'I', 'G', 'N', ' ', '+', ' ', 'M', 'U', 'S', 'I', 'C']

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 100
      const yPercent = (e.clientY / window.innerHeight) * 100

      setMousePosition({ x: xPercent, y: yPercent })

      // Calculate distance from center (0 = center, higher = edges)
      const distanceFromCenter = Math.sqrt(
        Math.pow(xPercent - 50, 2) + Math.pow(yPercent - 50, 2)
      )

      // Normalize grayscale: 100% at edges, 0% at center
      const exponent = 2; // Increase this value for a more aggressive effect
const grayscale = Math.min(100, Math.pow(distanceFromCenter / 50, exponent) * 100)
const brightness = 10 + (grayscale / 100) * 10;

setBrightness(brightness)
      setGrayscale(grayscale)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="home-page">
        {/* Background Image */}
        <div
          className="background-image"
          style={{ 
            transform: `translate(${(mousePosition.x - 50) /50}%, ${(mousePosition.y - 50) / 50}%)`,
            filter: `brightness(${brightness}%) blur(0px)` ,
          }}
        >
          <div className="grid-item"><img src={testBG} alt="Work 1" /></div>
        </div>

        {/* Foreground Text */}
        <div className="text-zone">
          <h1>NASH STEED</h1>
          <h3>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={12} />
          </h3>
          <div className='buttons'>
            <Link to="/about" className="flat-button left">About</Link>
            <Link to="/portfolio" className="flat-button center">Portfolio</Link>
            <Link to="/contact" className="flat-button right">Contact</Link>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

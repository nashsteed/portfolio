import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.scss'
import testBG from '../../assets/images/testBG.webp'

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [grayscale, setGrayscale] = useState(0)
  const [brightness, setBrightness] = useState(22)
  const [applyContactClass, setApplyContactClass] = useState(false) // <-- Store in state

  const location = useLocation();

  useEffect(() => {
    // Check if the last visited page was "/"
    const lastRoute = localStorage.getItem('lastRoute');
    if (lastRoute === "/") {
      setApplyContactClass(true);
    }

    // Store the current route as the last route for the next navigation
    localStorage.setItem('lastRoute', location.pathname);
  }, [location.pathname]); // Runs only when route changes

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 100
      const yPercent = (e.clientY / window.innerHeight) * 100

      setMousePosition({ x: xPercent, y: yPercent })

      const distanceFromCenter = Math.sqrt(
        Math.pow(xPercent - 50, 2) + Math.pow(yPercent - 50, 2)
      )

      const exponent = 2;
      const grayscale = Math.min(100, Math.pow(distanceFromCenter / 50, exponent) * 100)
      const brightness = 10 + (grayscale / 100) * 10;

      setBrightness(brightness)
      setGrayscale(grayscale)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`home-page ${applyContactClass ? "contact" : ""}`}>
      {/* Background Image */}
      <div
        className={`background-image contact-switch ${applyContactClass ? "contact" : ""}`}
        style={{ 
          // transform: `translate(${(mousePosition.x - 50) / 50}%, ${(mousePosition.y - 50) / 50}%)`,
          filter: `brightness(${brightness}%) blur(0px)`,
        }}
      >
        <div className="grid-item"><img src={testBG} alt="Work 1" /></div>
      </div>

      {/* Foreground Text */}
      <div className="text-zone">
        <h1 className={applyContactClass ? "contact" : ""}>NASH STEED</h1>
        <h3 className={applyContactClass ? "contact" : ""}>
          GRAPHIC DESIGN + MUSIC
        </h3>
        <div className='flat-square'>
          <h3 >Email: nashsteed13@gmail.com</h3>
          <br />
          <h3>Phone: (804) 219-7366</h3>
        </div>
        <a href="https://www.linkedin.com/in/nash-steed/" 
  className="flat-button center contact-button fadeInUp" 
  target="_blank" 
  rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  )
}

export default Contact;

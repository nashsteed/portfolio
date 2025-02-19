import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [showLoader, setShowLoader] = useState(true);

  const nameArray = ['N','a','s','h',' ','S','t','e','e','d']
  const jobArray = [
    'G',
    'r',
    'a',
    'p',
    'h',
    'i',
    'c',
    '',
    'D',
    'e',
    's',
    'i',
    'g',
    'n',
    ' ',
    '+',
    ' ',
    'M',
    "u",
    's',
    'i',
    'c',
  ]

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoader(false)
  //   }, 0)
  
  //   // Return a cleanup function that clears the timeout
  //   return () => clearTimeout(timer)
  // }, [])
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 2000)
  
  //   // Return a cleanup function that clears the timeout
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
    
      <div className="home-page gradient-background">
        <div className="text-zone">
          <h1 className="fadeInUp-animation">
            Nash Steed
            <br />
            
          </h1>
          <h3><AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={12}
            /></h3>
          <h2></h2>
          <div className='fadeInUp-animation'>
          <Link to="/portfolio" className="flat-button left">
            Portfolio
          </Link>
          <Link to="/contact" className="flat-button right">
            Contact
          </Link>
          <Link to="/about" className="flat-button center">
            About
          </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['N','a','s','h',' ','S','t','e','e','d']
  const jobArray = [
    'G',
    'r',
    'a',
    'p',
    'h',
    'i',
    'c',
    ' ',
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


  return (
    <>
      <div className="home-page gradient-background">
        <div className="text-zone">
          <h1>
            <AnimatedLetters className="text-non-animate"
              letterClass="text-animate-hover"
              strArray={nameArray}
              idx={15}
            />
            <br />
            
          </h1>
          <h3><AnimatedLetters className="text-non-animate"
              letterClass="text-animate-hover"
              strArray={jobArray}
              idx={20}
            /></h3>
          <h2></h2>
          <h3 class="flat-square">
            Email: 
            <br></br>
            nashsteed13@gmail.com
            <br></br>
            Phone: 
            <br></br>
            (804)-219-7366
          </h3>
        </div>
      </div>

    </>
  )
}

export default Contact

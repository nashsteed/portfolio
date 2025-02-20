import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'

import Lottie from 'react-lottie';

import animationData from '../../../assets/images/logotest.json'; 

import seek from '../../../assets/images/MGCS/MGCS T Shirts.webp'
import pic1 from '../../../assets/images/MGCS/MGCS T Shirts.webp'
import pic2 from '../../../assets/images/MGCS/tshirts2.jpg'
import alt1 from '../../../assets/images/MGCS/5.webp'
import alt2 from '../../../assets/images/MGCS/4.webp'
import Back from '../../../assets/images/2025-02-14 13.06.46.jpg'

import flower from '../../../assets/images/flower1.png'
import logo1 from '../../../assets/images/logo1.png'
import side1 from '../../../assets/images/side1.png'




const Dogwood = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient
  const lottieOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  <div className="portfolio-detail-item portfolio-item-large">
      <img src={logo1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

  <div className="portfolio-detail-item portfolio-item-large" align-self="center" >
      <h1>Logo Redesign</h1>
      <h2>Client: Dogwood Land Development</h2>
      <h2>A land development company based in Wilmington, NC contacted me about redesigning their logo. They wanted to maintain the iconic dogflower aesthetic but wanted it to look modern and cleaner. I had a blast designing this for them and getting to see it put in action!</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
    <div className='lottie-container'>
          <Lottie 
            options={lottieOptions}
            alt="Portfolio 1"
            height={650}
            rel="preload"
            loading="lazy"
          />
          </div>
    </div>
    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={side1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={flower} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={flower} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    
    



  </div>
</div>
  );
};

export default Dogwood;

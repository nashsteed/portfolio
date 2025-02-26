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
import logoGif from '../../../assets/images/logotest.gif'
import process from '../../../assets/images/process-dogwood.png'
import old from '../../../assets/images/old-dogwood.png'

import colorGuide from '../../../assets/images/color-guide.png'

import coolFlower from '../../../assets/images/coolflower.png'

import businessCards from '../../../assets/images/dogwood-business-cards.webp'
import businessCards2 from '../../../assets/images/dogwood-business-cards1.webp'



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

  <div className="portfolio-detail-item portfolio-item-large2">
      <img src={businessCards} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={colorGuide} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

  <div className="portfolio-detail-item portfolio-item-large" align-self="center" >
      <h1>Logo Redesign</h1>
      <h2 className="client">Client: Dogwood Land Development</h2>
      <h2>A Wilmington, NC-based land development company reached out to me for a logo redesign. They wanted to keep the iconic dogflower aesthetic but with a cleaner, more modern look. I had a blast working on this design and loved seeing it come to life!</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={logo1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={side1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={process} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={old} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={businessCards2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    



    {/* <div className="portfolio-detail-item portfolio-item-large2">
    <div className='lottie-container'>
          <Lottie 
            options={lottieOptions}
            alt="Portfolio 1"
            height={650}
            rel="preload"
            loading="lazy"
          />
          </div>
    </div> */}




    
    



  </div>
</div>
  );
};

export default Dogwood;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'

import seek from '../../../assets/images/MGCS/MGCS T Shirts.webp'
import pic1 from '../../../assets/images/MGCS/tshirts.jpg'
import pic2 from '../../../assets/images/MGCS/tshirts2.jpg'
import alt1 from '../../../assets/images/MGCS/5.webp'
import alt2 from '../../../assets/images/MGCS/4.webp'
import Back from '../../../assets/images/2025-02-14 13.06.46.jpg'

const MGCSShirts = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  <div className="portfolio-detail-item portfolio-item-large2" align-self="center" >
      <h1>"Seek Him First" 2023 Shirts</h1>
      <h2>Client: Myrtle Grove Christian School</h2>
      <h2>I was asked to design new t-shirts for MGCS's 2023 school year theme. I created alternate designs with a different theme and got some great pictures of the shirts in action!</h2>
    </div>
    
  <div className="portfolio-detail-item portfolio-item-large2">
      <img src={pic1} className="portfolio-detail-item" />
    </div>

  

    

 



    
    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={pic2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={seek} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={alt1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={alt2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>


  </div>
</div>
  );
};

export default MGCSShirts;

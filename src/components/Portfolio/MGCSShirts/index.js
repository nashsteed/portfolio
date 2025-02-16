import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '/Users/nashsteed/Documents/portfolio-site/src/components/Portfolio/Postcards/index.scss'
import BB from '../../../assets/images/BB KING.png'

import BBmock2 from '../../../assets/images/Poster_Wall_Mockup.png'
import BB2 from '../../../assets/images/BB KING 2.png'
import sidemockdrno from '../../../assets/images/drno side mockup.png'
import sidemockgolden from '../../../assets/images/goldeneye side mockup.png'
import goldenmock from '../../../assets/images/goldeneyeMock.png'
import drnomock from '../../../assets/images/drNoMock.png'
import drnoposter from '../../../assets/images/Dr. No.png'
import goldenposter from '../../../assets/images/goldeneye.png'
import seek from '../../../assets/images/MGCS/MGCS T Shirts.png'
import pic1 from '../../../assets/images/MGCS/tshirts.jpg'
import pic2 from '../../../assets/images/MGCS/tshirts2.jpg'
import alt1 from '../../../assets/images/MGCS/5.png'
import alt2 from '../../../assets/images/MGCS/4.png'
import Back from '../../../assets/images/2025-02-14 13.06.46.jpg'

const MGCSShirts = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  <div className="portfolio-detail-item portfolio-item-large">
      <img src={seek} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

  <div className="portfolio-detail-item portfolio-item-large" align-self="center" >
      <h1>"Seek Him First" 2023 Shirts</h1>
      <h2>Client: Myrtle Grove Christian School</h2>
      <h2>I was asked to design new t-shirts for MGCS's 2023 school year theme. I created alternate designs with a different theme and got some great pictures of the shirts in action!</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={pic1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={pic2} alt="Portfolio 1" className="portfolio-detail-item" />
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

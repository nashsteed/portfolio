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

import redBlank from '../../../assets/images/ATANC MAY/redBlank.png'
import blueBlank from '../../../assets/images/ATANC MAY/blueBlank.png'
import red1 from '../../../assets/images/ATANC MAY/red1.png'
import red2 from '../../../assets/images/ATANC MAY/red2.png'
import blue1 from '../../../assets/images/ATANC MAY/blue1.png'
import blue2 from '../../../assets/images/ATANC MAY/blue2.png'

const ATANCMay = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">


  <div className="portfolio-detail-item portfolio-item-large2" align-self="center" >
      <h1>Abilities Tennis Association of North Carolina: National Tennis Month Ads</h1>
      <h2>Client: Abilities Tennis Association of North Carolina</h2>
      <h2>I volunteer for a tennis organization that provides clinics and tournaments for athletes with intellectual disabilities. I had the opportunity to design these advertisements for them to post on social media and promote playing tennis in the month of May! Abilities Tennis Association of NC serves over 600 athletes with 32 programs across the state of NC. </h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={redBlank} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={blueBlank} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={red1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
    <div className="portfolio-detail-item portfolio-item-large">
      <img src={blue1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={red2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={blue2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
    
    



  </div>
</div>
  );
};

export default ATANCMay;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'


import redBlank from '../../../assets/images/ATANC MAY/redBlank.webp'
import blueBlank from '../../../assets/images/ATANC MAY/blueBlank.webp'
import red1 from '../../../assets/images/ATANC MAY/red1.webp'
import red2 from '../../../assets/images/ATANC MAY/red2.webp'
import blue1 from '../../../assets/images/ATANC MAY/blue1.webp'
import blue2 from '../../../assets/images/ATANC MAY/blue2.webp'
import front from '../../../assets/images/goodfront.jpg'
import frontDesign from '../../../assets/images/1 SPRING BREAK.webp'
import TAWGPic from '../../../assets/images/coolTAWG2.jpg'
import TAWG from '../../../assets/images/3 TAWG Info.webp'
import boxPic from '../../../assets/images/box-spring.jpg'
import inHandSpring from '../../../assets/images/pages-open.jpg'



const SpringBreak = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">


  <div className="portfolio-detail-item portfolio-item-large2" align-self="center" >
      <h1>Navigators Spring Break Trip Booklets</h1>
      <h2 className="client">Client: The Navigators at Penn State</h2>
      <h2>With a very large group of students traveling out of state for a spring break community service trip, the Navigators at Penn State needed well-designed booklets to help guide each student through the week.</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={front} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={frontDesign} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={TAWGPic} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
    <div className="portfolio-detail-item portfolio-item-large">
      <img src={TAWG} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={boxPic} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={inHandSpring} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
    
    



  </div>
</div>
  );
};

export default SpringBreak;

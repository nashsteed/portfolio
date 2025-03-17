import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'

import Strawberry from '../../../assets/images/MeantToBee Strawberry.webp'
import Blueberry from '../../../assets/images/MeanToBee Blueberry.webp'
import Cinnamon from '../../../assets/images/MeantToBee Cinnamon.webp'
import StrawberryAd from '../../../assets/images/MeantToBee Ad Strawberry.webp'
import BlueberryAd from '../../../assets/images/MeantToBee Ad Blueberry.webp'
import CinnamonAd from '../../../assets/images/MeantToBee Ad Cinnamon.webp'
import StrawberryBoxes from '../../../assets/images/STRAWBERRY-BOXES.webp'
import BlueberryBoxes from '../../../assets/images/BLUEBERRY-BOXES.webp'
import CinnamonBoxes from '../../../assets/images/CINNAMON-BOXES.webp'

const MeantToBee = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  

    

  <div className="portfolio-detail-item portfolio-item-large">
      <img src={Strawberry} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large" align-self="center" >
      <h1>Meant To Bee</h1>
      <h2>A Flavored Honey Company</h2>
      <h2>Wanting to gain practice with brand designs and being an avid honey enthusiast, I decided to create this brand: Meant To Bee. I had a ton of fun designing these and creating the three flavors!</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={StrawberryAd} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={StrawberryBoxes} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={Blueberry} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={BlueberryAd} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={BlueberryBoxes} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={Cinnamon} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={CinnamonAd} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={CinnamonBoxes} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>


    

    
    



  </div>
</div>
  );
};

export default MeantToBee;

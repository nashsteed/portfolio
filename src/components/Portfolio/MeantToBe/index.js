import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'
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
import Strawberry from '../../../assets/images/MeantToBee Strawberry.png'
import Blueberry from '../../../assets/images/MeanToBee Blueberry.png'
import Cinnamon from '../../../assets/images/MeantToBee Cinnamon.png'
import StrawberryAd from '../../../assets/images/MeantToBee Ad Strawberry.png'
import BlueberryAd from '../../../assets/images/MeantToBee Ad Blueberry.png'
import CinnamonAd from '../../../assets/images/MeantToBee Ad Cinnamon.png'

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

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={Blueberry} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={BlueberryAd} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={Cinnamon} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={CinnamonAd} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>


    

    
    



  </div>
</div>
  );
};

export default MeantToBee;

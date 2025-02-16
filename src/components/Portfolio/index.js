import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import BB from '../../assets/images/bbking-mock.png'
import BB2 from '../../assets/images/BB KING 2.png'
import BBmock2 from '../../assets/images/Poster_Wall_Mockup.png'
import seek from '../../assets/images/MGCS/MGCS T Shirts.png'
import HeLoved from '../../assets/images/MGCS/4.png'
import HeLovedBlue from '../../assets/images/MGCS/5.png'
import spectre from '../../assets/images/spectre.png'
import postcards from '../../assets/images/postcards-mock.png'
import goldeneye from '../../assets/images/goldeneyeMock.png'
import drNo from '../../assets/images/drNoMock.png'
import shirtDesigns from '../../assets/images/MGCS/banner.png'
import MeantToBeeStrawberryAd from '../../assets/images/MeantToBee Ad Strawberry.png'
import deepWatersMock from '../../assets/images/DeepWatersMock.png'
import phoneMock from '../../assets/images/DeepWatersSlides/phoneMock.png'
import togetherBlank from '../../assets/images/ATANC MAY/togetherBlank.png'
import red1 from '../../assets/images/ATANC MAY/red1.png'
import blueBlank from '../../assets/images/ATANC MAY/blueBlank.png'



const Portfolio = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background'); // Start with the first gradient

  useEffect(() => {
    // Trigger background change after a slight delay to allow transition
    setTimeout(() => {
      setBackgroundClass('gradient-background-second'); // Change to the second gradient
    }, 100); // Delay to make sure transition happens after page load
  }, []); // Only run on page mount

  return (
    <div className={`portfolio ${backgroundClass}`}>
      <div className="portfolio-grid">


      <Link to="/portfolio/james-bond-books" className="portfolio-item portfolio-item-large">
          <img src={goldeneye} alt="Portfolio 1" />
        </Link>

        <Link to="/portfolio/meant-to-bee" className="portfolio-item portfolio-item-large">
          <img src={MeantToBeeStrawberryAd} alt="Portfolio 1" />
          </Link>

          <Link to="/portfolio/deep-waters" className="portfolio-item portfolio-item-large">
          <img src={deepWatersMock} alt="Portfolio 1" />
          </Link>

        <Link to="/portfolio/deep-waters" className="portfolio-item portfolio-item-large">
          <img src={phoneMock} alt="Portfolio 1" />
          </Link>

          <Link to="/portfolio/atanc-national-tennis-month" className="portfolio-item portfolio-item-large">
          <img src={blueBlank} alt="Portfolio 2" />
          </Link>

          <Link to="/portfolio/atanc-national-tennis-month" className="portfolio-item portfolio-item-large">
          <img src={red1} alt="Portfolio 2" />
          </Link>
      

          <Link to="/portfolio/city-postcards" className="portfolio-item portfolio-item-medium">
          <img src={postcards} alt="Portfolio 2" />
          </Link>

          <Link to="/portfolio/mgcs-shirts" className="portfolio-item portfolio-item-large2">
          <img src={shirtDesigns} alt="Portfolio 1" />
        </Link>


         

          <Link to="/portfolio/bb-king-poster" className="portfolio-item portfolio-item-large2">
          <img src={BBmock2} alt="Portfolio 1" />
        </Link>

       
         
      
        {/* Add more items here */}
      </div>
    </div>
  );
};

export default Portfolio;

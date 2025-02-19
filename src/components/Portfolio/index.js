import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

import BBmock2 from '../../assets/images/Poster_Wall_Mockup.webp'

import postcards from '../../assets/images/postcards-mock.webp'
import goldeneye from '../../assets/images/goldeneyeMock.webp'

import shirtDesigns from '../../assets/images/MGCS/banner.webp'
import MeantToBeeStrawberryAd from '../../assets/images/MeantToBee Ad Strawberry.webp'
import deepWatersMock from '../../assets/images/DeepWatersMock.webp'
import phoneMock from '../../assets/images/DeepWatersSlides/phoneMock.webp'
import red1 from '../../assets/images/ATANC MAY/red1.webp'
import blueBlank from '../../assets/images/ATANC MAY/blueBlank.webp'



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

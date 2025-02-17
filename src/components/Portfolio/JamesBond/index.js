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
const JamesBond = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  <div className="portfolio-detail-item portfolio-item-large">
      <img src={goldenmock} alt="Portfolio 1" className="" />
    </div>

  <div className="portfolio-detail-item portfolio-item-large" align-self="center" >
      <h1>James Bond Book Covers</h1>
      <h2>Inspired by 1960s designs for "Dr. No," these are book covers and movie posters (below) designed for two classic James Bond stories.</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={sidemockgolden} alt="Portfolio 1" className="" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={drnomock} alt="Portfolio 1" className="" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={sidemockdrno} alt="Portfolio 1" className="" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2" align-self="center" >
      <h2>Movie poster versions:</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={drnoposter} alt="Portfolio 1" className="" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={goldenposter} alt="Portfolio 1" className="" />
    </div>
    
    



  </div>
</div>
  );
};

export default JamesBond;

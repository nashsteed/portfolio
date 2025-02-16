import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'
import BB from '../../../assets/images/BB KING.png'

import BBmock2 from '../../../assets/images/Poster_Wall_Mockup.png'
import BB2 from '../../../assets/images/BB KING 2.png'

import AIKIM from '../../../assets/images/aikim.jpg'
import art1 from '../../../assets/images/IMG_0130.jpg'
const Art = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  <div className="portfolio-detail-item portfolio-item-large2">
      <img src={art1} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
  
  <div className="portfolio-detail-item portfolio-item-large2">
      <h1>'Witnesses'</h1>
          </div>
    
    
  

  <div className="portfolio-detail-item portfolio-item-large2">
      <img src={AIKIM} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <h1>'All I Know Is Me'</h1>
      <h2>Artwork I made to accompany a song I was writing entitled 'All I Know Is Me."</h2>
    </div>



  </div>
</div>
  );
};

export default Art;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'
import BB from '../../../assets/images/BB KING.webp'

import BBmock2 from '../../../assets/images/Poster_Wall_Mockup.webp'
import BB2 from '../../../assets/images/BB KING 2.webp'

const MusicPoster = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">

  <div className="portfolio-detail-item portfolio-item-large2">
      <h1>B.B. King Concert Posters</h1>
      <h2>One of the greatest guitarists to ever play the blues. A tribute poster design for a music legend.</h2>
    </div>

  <div className="portfolio-detail-item portfolio-item-large2">
      <img src={BBmock2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>
    
    <div className="portfolio-detail-item portfolio-item-large1col">
      <img src={BB} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large1col">
      <img src={BB2} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>



  </div>
</div>
  );
};

export default MusicPoster;

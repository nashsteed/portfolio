import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'
import BB from '../../../assets/images/bbking-mock.png'
import trophy from '../../../assets/images/trophy.png'
import spectre from '../../../assets/images/spectre.png'
import postcards from '../../../assets/images/postcards-mock.png'
import postcardMock from '../../../assets/images/postcards-mockup.png'
import seoul from '../../../assets/images/seoul postcard.png'
import cville from '../../../assets/images/cville postcard.png'
import seattle from '../../../assets/images/seattle.png'
import boston from '../../../assets/images/boston postcard.png'

const Postcards = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid">
    
    <div className="portfolio-detail-item portfolio-item-large1col">
      <img src={postcards} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large1col">
      <h1>City Postcards</h1>
      <h2>Cities that mean special things to me given special postcards. I wanted to create postcards that went against the ordinary style for the given cities but still captured something significant about the location.</h2>
    </div>

    <div className="portfolio-detail-item portfolio-item-large2">
      <img src={postcardMock} alt="Portfolio 1" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={seoul} alt="Portfolio 1" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large">
      <img src={cville} alt="Portfolio 1" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large1col">
      <img src={seattle} alt="Portfolio 1" />
    </div>

    <div className="portfolio-detail-item portfolio-item-large1col">
      <img src={boston} alt="Portfolio 1"/>
    </div>


  </div>
</div>
  );
};

export default Postcards;

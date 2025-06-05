import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'
import resume from '../../../assets/images/ResumeNashSteed.png'

import gradPhoto from '../../../assets/images/gradphoto.webp'


const Resume = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid about">

  <div className="portfolio-detail-item portfolio-item-large2 fadeInUp-animation">
      <img src={resume} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>



    



  </div>
</div>
  );
};

export default Resume;

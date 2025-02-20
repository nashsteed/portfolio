import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'

import castYourSails from '../../../assets/images/cast-your-sails-v2.webp';
import kidsCastle from '../../../assets/images/kidscastle.jpg';
import colorTheStars from '../../../assets/images/colorthestars.jpg';
import rainfall from '../../../assets/images/rainfall.jpg';

const Music = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
      <div className="portfolio-item-grid music-art">
      <div className="portfolio-detail-item portfolio-item-large2">
        <h1></h1>
          <h1> Cast Your Sails</h1>
          <h2>Album</h2>
          <h2>Released: 2023</h2>
        </div>
        <div className="portfolio-detail-item portfolio-item-large">
          <img rel="preload" loading="lazy" src={castYourSails}></img>
        </div>
        

        {/* Correct iframe embed with inline style */}
        <div className="portfolio-detail-item portfolio-item-large">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/album/0cn0gOmaUEFWNFCUUP7Lm8?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      <div className="portfolio-detail-item portfolio-item-large2">
        <h1></h1>
          <h1>Rainfall</h1>
          <h2>Single</h2>
          <h2>Released: 2023</h2>
        </div>
        <div className="portfolio-detail-item portfolio-item-large">
          <img loading="lazy" src={rainfall}></img>
        </div>
        

        {/* Correct iframe embed with inline style */}
        <div className="portfolio-detail-item portfolio-item-large">
  <iframe
    style={{ borderRadius: '12px' }}
    src="https://open.spotify.com/embed/album/7JZ6BjmFL2Y7oa2t9vTSs4?utm_source=generator"
    width="100%"
    height="352"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</div>

<div className="portfolio-detail-item portfolio-item-large2">
        <h1></h1>
          <h1>A Kid's Castle</h1>
          <h2>Single</h2>
          <h2>Released: 2022</h2>
        </div>
        <div className="portfolio-detail-item portfolio-item-large">
          <img loading="lazy" src={kidsCastle}></img>
        </div>
        

        {/* Correct iframe embed with inline style */}
        <div className="portfolio-detail-item portfolio-item-large">
        <iframe
  style={{ borderRadius: '12px' }}  // Correct inline styling
  src="https://open.spotify.com/embed/album/0uPyW02ssqxfX0Dgqbb8CG?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowFullScreen  // Correct boolean attribute name
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>

</div>

<div className="portfolio-detail-item portfolio-item-large2">
        <h1></h1>
          <h1>Color The Stars</h1>
          <h2>Single</h2>
          <h2>Released: 2022</h2>
        </div>
        <div className="portfolio-detail-item portfolio-item-large">
          <img loading="lazy" src={colorTheStars}></img>
        </div>
        

        {/* Correct iframe embed with inline style */}
        <div className="portfolio-detail-item portfolio-item-large">
        <iframe
  style={{ borderRadius: '12px' }}  // Correct inline styling
  src="https://open.spotify.com/embed/album/4xddPHNA4Gz8kuHS8HRIAe?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowFullScreen  // Correct boolean attribute name in React
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>


</div>





      </div>
    </div>
  );
};

export default Music;

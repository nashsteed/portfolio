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
        rel="preload"
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameBorder="0"
  height="450"
  style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/album/cast-your-sails/1701915477"
></iframe>      </div>

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
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameBorder="0"
  height="450"
  loading="lazy"  // Added lazy loading for better performance
  style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }} // Fixed style syntax
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/album/rainfall-single/1662712191"
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
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameBorder="0"
  height="450"
  loading="lazy"  // Lazy loading for better performance
  style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }} // React-compatible style
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/album/a-kids-castle-single/1635008288"
></iframe>


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
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameBorder="0"
  height="450"
  loading="lazy"  // Improves page load speed
  style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }} // React-friendly syntax
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/album/color-the-stars-single/1632058608"
></iframe>



</div>





      </div>
    </div>
  );
};

export default Music;

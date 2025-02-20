import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// Images
import BBmock2 from '../../assets/images/Poster_Wall_Mockup.webp';
import postcards from '../../assets/images/postcards-mock.webp';
import goldeneye from '../../assets/images/goldeneyeMock.webp';
import shirtDesigns from '../../assets/images/MGCS/banner.webp';
import MeantToBeeStrawberryAd from '../../assets/images/MeantToBee Ad Strawberry.webp';
import deepWatersMock from '../../assets/images/DeepWatersMock.webp';
import phoneMock from '../../assets/images/DeepWatersSlides/phoneMock.webp';
import red1 from '../../assets/images/ATANC MAY/red1.webp';
import blueBlank from '../../assets/images/ATANC MAY/blueBlank.webp';

const Portfolio = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background');
  const imagesRef = useRef([]);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Trigger background change after a slight delay
    setTimeout(() => {
      setBackgroundClass('gradient-background-second');
    }, 100);

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target && !loadedImages.includes(entry.target)) {
          entry.target.classList.add('loaded');
          observerInstance.unobserve(entry.target); // Stop observing once loaded
          setLoadedImages((prev) => [...prev, entry.target]);
        }
      });
    }, { threshold: 0.5 });

    // Ensure we only observe valid DOM elements
    imagesRef.current.forEach((image) => {
      if (image && image instanceof Element) {
        observer.observe(image);
      }
    });

    return () => {
      observer.disconnect();
      imagesRef.current = []; // Clean up references on unmount
    };
  }, [loadedImages]); // Dependency array to track loaded images

  // Ref callback to push image elements to imagesRef
  const setImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <div className={`portfolio ${backgroundClass}`}>
      <div className="portfolio-grid">
        <Link to="/portfolio/james-bond-books" className="portfolio-item portfolio-item-large">
          <img 
            ref={setImageRef} 
            src={goldeneye} 
            alt="Portfolio 1" 
            loading="lazy"
            onLoad={() => handleImageLoad(0)} 
          />
        </Link>

        <Link to="/portfolio/meant-to-bee" className="portfolio-item portfolio-item-large">
          <img 
            ref={setImageRef} 
            src={MeantToBeeStrawberryAd} 
            alt="Portfolio 1" 
            loading="lazy"
            onLoad={() => handleImageLoad(1)} 
          />
        </Link>

        <Link to="/portfolio/deep-waters" className="portfolio-item portfolio-item-large">
          <img 
            ref={setImageRef} 
            src={deepWatersMock} 
            alt="Portfolio 1" 
            loading="lazy"
            onLoad={() => handleImageLoad(2)} 
          />
        </Link>

        <Link to="/portfolio/deep-waters" className="portfolio-item portfolio-item-large">
          <img 
            ref={setImageRef} 
            src={phoneMock} 
            alt="Portfolio 1" 
            loading="lazy"
            onLoad={() => handleImageLoad(3)} 
          />
        </Link>

        <Link to="/portfolio/atanc-national-tennis-month" className="portfolio-item portfolio-item-large">
          <img 
            ref={setImageRef} 
            src={blueBlank} 
            alt="Portfolio 2" 
            loading="lazy"
            onLoad={() => handleImageLoad(4)} 
          />
        </Link>

        <Link to="/portfolio/atanc-national-tennis-month" className="portfolio-item portfolio-item-large">
          <img 
            ref={setImageRef} 
            src={red1} 
            alt="Portfolio 2" 
            loading="lazy"
            onLoad={() => handleImageLoad(5)} 
          />
        </Link>

        <Link to="/portfolio/city-postcards" className="portfolio-item portfolio-item-medium">
          <img 
            ref={setImageRef} 
            src={postcards} 
            alt="Portfolio 2" 
            loading="lazy"
            onLoad={() => handleImageLoad(6)} 
          />
        </Link>

        <Link to="/portfolio/mgcs-shirts" className="portfolio-item portfolio-item-large2">
          <img 
            ref={setImageRef} 
            src={shirtDesigns} 
            alt="Portfolio 1" 
            loading="lazy"
            onLoad={() => handleImageLoad(7)} 
          />
        </Link>

        <Link to="/portfolio/bb-king-poster" className="portfolio-item portfolio-item-large2">
          <img 
            ref={setImageRef} 
            src={BBmock2} 
            alt="Portfolio 1" 
            loading="lazy"
            onLoad={() => handleImageLoad(8)} 
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

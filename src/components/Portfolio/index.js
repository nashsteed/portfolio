import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// Image imports
import dogwoodPreview from '../../assets/images/DOGWOOD-PREVIEW.webp';
import meantToBeePreview from '../../assets/images/MEANT-TO-BEE-PREVIEW.webp';
import deepWatersPreview from '../../assets/images/DEEP-WATERS-PREVIEW.webp';
// import tennisPreview from '../../assets/images/tennis-previews.webp';
import tennisPreview from '../../assets/images/ATANC-PREVIEW2.webp';
import springPreview from '../../assets/images/SPRING-BREAK-PREVIEW.webp';
import postcardsPreview from '../../assets/images/postcards-preview.webp';
import jamesPreview from '../../assets/images/JAMES-BOND-PREVIEW.webp';
import BBmock2 from '../../assets/images/Poster_Wall_Mockup.webp';
import shirtDesigns from '../../assets/images/MGCS/banner.webp';

const Portfolio = () => {
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (imagesLoaded) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(`Observed: ${entry.target.alt}, In View: ${entry.isIntersecting}`);
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              console.log(entry.target.classList);
              observer.unobserve(entry.target); // Stop observing after it appears
            }
          });
        },
        {
          threshold: 0.5, // 50% of the parent element must be in view
          rootMargin: '50px 0px', // Set a small margin to trigger slightly before it enters the viewport
        }
      );

      // Observe each parent element (link container)
      imagesRef.current.forEach((image) => {
        if (image) observer.observe(image.parentElement); // Observe the parent element
      });

      return () => observer.disconnect();
    }
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    // Check if all images have loaded
    const allImagesLoaded = imagesRef.current.every((el) => el.complete);
    if (allImagesLoaded) {
      setImagesLoaded(true); // Set state to true when all images are loaded
    }
  };

  // Assign images to ref and avoid duplicates
  const setImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
      el.addEventListener('load', handleImageLoad); // Add load event listener to each image
    }
  };

  return (
    <div className="portfolio">
      <div className="portfolio-grid">
        <Link to="/portfolio/dogwood" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={dogwoodPreview} alt="Dogwood Project" loading="lazy" />
        </Link>

        <Link to="/portfolio/deep-waters" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={deepWatersPreview} alt="Deep Waters Project" loading="lazy" />
        </Link>

        <Link to="/portfolio/atanc-national-tennis-month" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={tennisPreview} alt="Tennis Project" loading="lazy" />
        </Link>

        

        <Link to="/portfolio/james-bond-books" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={jamesPreview} alt="James Bond Project" loading="lazy" />
        </Link>

        

        <Link to="/portfolio/meant-to-bee" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={meantToBeePreview} alt="Meant to Bee Project" loading="lazy" />
        </Link>

        <Link to="/portfolio/spring-break" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={springPreview} alt="Spring Break" loading="lazy" />
        </Link>

        <Link to="/portfolio/mgcs-shirts" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={shirtDesigns} alt="MGCS Shirts" loading="lazy" />
        </Link>

        

        <Link to="/portfolio/city-postcards" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={postcardsPreview} alt="City Postcards" loading="lazy" />
        </Link>

        <Link to="/portfolio/bb-king-poster" className="portfolio-item portfolio-item-large2">
          <img ref={setImageRef} src={BBmock2} alt="BB King Poster" loading="lazy" />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

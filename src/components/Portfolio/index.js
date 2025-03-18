import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./index.scss";

// Image imports
import dogwoodPreview from "../../assets/images/DOGWOOD-PREVIEW.webp";
import meantToBeePreview from "../../assets/images/MEANT-TO-BEE-PREVIEW.webp";
import deepWatersPreview from "../../assets/images/DEEP-WATERS-PREVIEW.webp";
import tennisPreview from "../../assets/images/ATANC-PREVIEW2.webp";
import springPreview from "../../assets/images/SPRING-BREAK-PREVIEW.webp";
import postcardsPreview from "../../assets/images/postcards-preview.webp";
import jamesPreview from "../../assets/images/JAMES-BOND-PREVIEW.webp";
import BBmock2 from "../../assets/images/Poster_Wall_Mockup.webp";
import shirtDesigns from "../../assets/images/MGCS/banner.webp";

// Portfolio items list
const portfolioItems = [
  { src: dogwoodPreview, alt: "Dogwood Project", link: "/portfolio/dogwood" },
  { src: deepWatersPreview, alt: "Deep Waters Project", link: "/portfolio/deep-waters" },
  { src: tennisPreview, alt: "Tennis Project", link: "/portfolio/atanc-national-tennis-month" },
  { src: jamesPreview, alt: "James Bond Project", link: "/portfolio/james-bond-books" },
  { src: meantToBeePreview, alt: "Meant to Bee Project", link: "/portfolio/meant-to-bee" },
  { src: springPreview, alt: "Spring Break", link: "/portfolio/spring-break" },
  { src: shirtDesigns, alt: "MGCS Shirts", link: "/portfolio/mgcs-shirts" },
  { src: postcardsPreview, alt: "City Postcards", link: "/portfolio/city-postcards" },
  { src: BBmock2, alt: "BB King Poster", link: "/portfolio/bb-king-poster" },
];

const Portfolio = () => {

  const [allLoaded, setAllLoaded] = useState(false);
  const loadedImages = useRef(0);

  useEffect(() => {
    const handleImageLoad = () => {
      loadedImages.current += 1;
      if (loadedImages.current === portfolioItems.length) {
        setTimeout(() => {
          setAllLoaded(true); // Delay visibility slightly
        }, 500);
      }
    };

    // Preload all images
    portfolioItems.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      img.onload = handleImageLoad;
    });
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const PortfolioItem = ({ item }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(`In view: ${entry.target.alt}`); // Debugging log
            entry.target.classList.add("in-view"); // Add class when in view
          } else {
            // console.log(`Not in view: ${entry.target.alt}`); // Debugging log for out of view
            entry.target.classList.remove("in-view"); // Remove class when out of view
          }
        });
      },
      {
        threshold: 0.05, // Trigger when 20% of the item is visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Link to={item.link} className="portfolio-item portfolio-item-large2" ref={ref}>
      <img src={item.src} alt={item.alt} loading="lazy" />
    </Link>
  );
};

export default Portfolio;

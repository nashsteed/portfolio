import { useState } from 'react';
import '../../../components/Portfolio/Postcards/index.scss'
import '../../../components/Portfolio/index.scss'
import '../../../components/Portfolio/DeepWaters/index.scss'
import deepWatersMock from '../../../assets/images/DeepWatersMock.png';

import slide1 from '../../../assets/images/DeepWatersSlides/slide1.webp';
import slide2 from '../../../assets/images/DeepWatersSlides/slide2.webp';
import slide3 from '../../../assets/images/DeepWatersSlides/slide3.webp';
import slide4 from '../../../assets/images/DeepWatersSlides/slide4.webp';
import slide5 from '../../../assets/images/DeepWatersSlides/slide5.webp';
import slide6 from '../../../assets/images/DeepWatersSlides/slide6.webp';
import slide7 from '../../../assets/images/DeepWatersSlides/slide7.webp';
import slide8 from '../../../assets/images/DeepWatersSlides/slide8.webp';
import slide9 from '../../../assets/images/DeepWatersSlides/slide9.webp';
import slide10 from '../../../assets/images/DeepWatersSlides/slide10.webp';
import slide11 from '../../../assets/images/DeepWatersSlides/slide11.webp';
import slide12 from '../../../assets/images/DeepWatersSlides/slide12.webp';
import slide13 from '../../../assets/images/DeepWatersSlides/slide13.webp';
import slide14 from '../../../assets/images/DeepWatersSlides/slide14.webp';
import slide15 from '../../../assets/images/DeepWatersSlides/slide15.webp';
import phoneMock from '../../../assets/images/DeepWatersSlides/phoneMock.webp';
import all3 from '../../../assets/images/deepwatersMOCK3.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faArrowLeft,
  faArrowRight, // Importing the back arrow icon
} from '@fortawesome/free-solid-svg-icons'


// List of images for the slideshow
const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
];

const DeepWaters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle back to the first image
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cycle to the last image if at the start
  };

  return (
    <div className="portfolio">
      <div className="portfolio-item-grid">
      <div className="portfolio-detail-item portfolio-item-large">
          <img src={deepWatersMock}/>
        </div>
        
        <div className="portfolio-detail-item portfolio-item-large">
          <h1>Deep Waters Portal App Designs</h1>
          <h2 className='client'>Client: Deep Waters Mentoring</h2>
        </div>

        

        


        <div className="portfolio-detail-item portfolio-item-large2">
          <h2>
            Deep Waters Mentoring, a non-profit ministry, asked me to redesign their user and coaching portals for their content. I love the mission of their work and loved designing these for them. Before the redesign, the tasks and metrics were not intuitive and there was too much on the screen. One of my biggest goals was to lessen the clunk of it and make for the simplest yet all-encompassing user experience possible.
          </h2>
        </div>


        <div className="portfolio-detail-item portfolio-item-large2">
        <div className="slideshow-controls">
          <FontAwesomeIcon onClick={prevImage} className="arrow-button left" icon={faArrowLeft}>
          </FontAwesomeIcon>
          <FontAwesomeIcon onClick={nextImage} className="arrow-button right" icon={faArrowRight}>
          </FontAwesomeIcon>
        </div>
          <img src={images[currentIndex]} alt="Portfolio" className="portfolio-detail-item" />
        </div>

        <div className="portfolio-detail-item portfolio-item-large2">
          <img src={all3}></img>
        </div>

        <div className="portfolio-detail-item portfolio-item-large2">
          <img src={phoneMock}></img>
        </div>

        
        

        {/* Navigation Arrows */}
        
      </div>
    </div>
  );
};

export default DeepWaters;

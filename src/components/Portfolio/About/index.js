import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'

import gradPhoto from '../../../assets/images/gradphoto.webp'


const About = () => {
  const [backgroundClass, setBackgroundClass] = useState('gradient-background-second'); // Start with the first gradient

  return (
    <div className={`portfolio ${backgroundClass}`}>
  <div className="portfolio-item-grid about">

  <div className="portfolio-detail-item portfolio-item-large fadeInUp-animation">
      <img src={gradPhoto} alt="Portfolio 1" className="portfolio-detail-item" />
    </div>

  <div className="portfolio-detail-item portfolio-item-large" align-self="center" >
      <h1>Nash Steed</h1>
      <h2 className="about-text">My love for graphic design began in middle school, when I ran a makeshift business online selling sports graphics that I thought were good enough to change the world. Since that first business, I have never stopped creating (whether it be designs, music, writing). 
<br></br>
<br></br>
I graduated from the University of Virginia in 2024 as an Echols Scholar with a Bachelors Degree in Computer Science and minor in Applied Statistics. I love creating, and I have found that working with people to help design what they are looking for is a priceless joy in the world. I bring passion, fun, and hopefully a smile whenever I work!</h2>
    </div>

    



  </div>
</div>
  );
};

export default About;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import '../../../components/Portfolio/Postcards/index.scss'
import  '../../Contact/index.scss'
import './aboutButton.scss'

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
      <h2 className="about-text">My love for graphic design started in middle school when I launched an online business selling sports graphics—convinced they were good enough to change the world. Since then, I haven’t stopped creating, whether through design, music, or writing.
<br></br>
<br></br>
I graduated from the University of Virginia in 2024 as an Echols Scholar with a Bachelor's Degree in Computer Science and a minor in Applied Statistics. Collaborating with people to bring their ideas to life is a priceless joy in this world. Creativity, passion, and a bit of fun are at the heart of everything I do. I hope to bring a smile to every project I take on.

</h2>
<br></br>
<br></br>
<br></br>

<a href="/resume" 
  className="flat-button2 center contact-button2 fadeInUp" 
>Resume</a>
    </div>

    

    



  </div>
</div>
  );
};

export default About;

import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
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
  faArrowLeft, // Importing the back arrow icon
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation(); // Get the current path
  const navigate = useNavigate(); // Use to navigate programmatically

  const isPortfolioItemPage = location.pathname.startsWith('/portfolio/');
  const isPortfolioPage = location.pathname.startsWith('/portfolio');
  const isMusicPage = location.pathname.startsWith('/music')
  const isArtPage = location.pathname.startsWith('/art');
  const isHomePage = location.pathname.endsWith('/');
  const isContactPage = location.pathname.endsWith('/contact');

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon className='home-icon' icon={faHome} color="#000" />
        </NavLink>

{!isHomePage && !isContactPage && (<div className='name-icon'>
<Link to="/contact" className="flat-button2">
            Contact
          </Link>
          </div>)}

          {isPortfolioPage && (<div className='select-icons'>
<Link to="/portfolio" className="selector design selected1">
            Design
          </Link>
          <Link to="/music" className="selector music">
            Music
          </Link>
          <Link to="/art" className="selector art">
            Art
          </Link>
          </div>)}

          {isMusicPage && (<div className='select-icons'>
<Link to="/portfolio" className="selector design ">
            Design
          </Link>
          <Link to="/music" className="selector music selected2">
            Music
          </Link>
          <Link to="/art" className="selector art">
            Art
          </Link>
          </div>)}

          {isArtPage && (<div className='select-icons'>
<Link to="/portfolio" className="selector design ">
            Design
          </Link>
          <Link to="/music" className="selector music">
            Music
          </Link>
          <Link to="/art" className="selector art selected3">
            Art
          </Link>
          </div>)}
        
        {/* Back Button - Only visible on /portfolio paths */}
        {isPortfolioItemPage && (
          <FontAwesomeIcon 
            onClick={() => navigate(-1)} // Navigate back to the previous page
            icon={faArrowLeft} // Use the arrow left icon for back button
            color="#ffd700"
            size="2x"
            className='back-icon' />
        )}

        
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar;

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Portfolio from './components/Portfolio'
import Postcards from './components/Portfolio/Postcards'
import './App.scss'
import MusicPoster from './components/Portfolio/Music Poster'
import JamesBond from './components/Portfolio/JamesBond'
import MGCSShirts from './components/Portfolio/MGCSShirts'
import MeantToBee from './components/Portfolio/MeantToBe'
import DeepWaters from './components/Portfolio/DeepWaters'
import ATANCMay from './components/Portfolio/ATANCMay'
import About from './components/Portfolio/About'
import Music from './components/Portfolio/Music'
import Art from './components/Portfolio/Art'
import Dogwood from './components/Portfolio/Dogwood'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Resume from './components/Portfolio/Resume'
import Home2 from './components/Home2/Home2'
import Contact2 from './components/Contact2/Contact2'

function App() {

  const location = useLocation();

  useEffect(() => {
    // Save the last route before navigating
    localStorage.setItem('lastRoute', location.pathname);
  }, [location.pathname]);

  return (
    <>
    <ScrollToTop/>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home2 />} />
          <Route path ="contact" index element={<Contact2 />} />
          <Route path ="resume" index element={<Resume />} />
          <Route path ="portfolio" index element={<Portfolio />} />
          <Route path="portfolio/city-postcards" element={<Postcards />} />
          <Route path="portfolio/bb-king-poster" element={<MusicPoster />} />
          <Route path="portfolio/james-bond-books" element={<JamesBond />} />
          <Route path="portfolio/mgcs-shirts" element={<MGCSShirts />} />
          <Route path="portfolio/meant-to-bee" element={<MeantToBee />} />
          <Route path="portfolio/deep-waters" element={<DeepWaters />} />
          <Route path="portfolio/atanc-national-tennis-month" element={<ATANCMay />} />
          <Route path="portfolio/dogwood" element={<Dogwood />} />
          <Route path="about" element={<About />} />
          <Route path="music" element={<Music />} />
          <Route path="art" element={<Art />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

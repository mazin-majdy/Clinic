import React from 'react'
import About from '../about/About'
import Accreditation from '../accreditation/Accreditation';
import Choose from '../choose/Choose';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Landing from '../landing/Landing'
import Mission from '../mission/Mission'
import Services from '../services/Services';
import TopBar from '../topbar/TopBar';

const Homepage = () => {
  return (
    <div>
      <TopBar />
      <Landing />
      <About />
      <Mission />
      <Services/>
      <Choose />
      <Accreditation />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage
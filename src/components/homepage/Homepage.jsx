import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Landing from '../landing/Landing'
import Mission from '../mission/Mission'
import Services from '../services/Services';
import TopBar from '../topbar/TopBar';


const Homepage = () => {
  return (
    <div>
      <Landing />
      <About />
      <Mission />
      <Services/>
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage
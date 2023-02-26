import React from 'react'
import About from '../about/About'
import Landing from '../landing/Landing'
import Mission from '../mission/Mission'
import Services from '../services/Services';


const Homepage = () => {
  return (
    <div>
      <Landing />
      <About />
      <Mission />
      <Services/>
    </div>
  )
}

export default Homepage
import "./landing.css"

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import NavBar from "../topbar/TopBar";


const Landing = () => {
  return (
    <div className="landing">
      <NavBar />
      <div className="landingcontainer">
        <div className="text">
          <h1>Welcome to our website dedicated to specialized and non-specialized mental health training, including diploma and short-term training programs, and supervision.</h1>
          <p>We offer a wide range of resources and tools to help individuals and organizations improve their mental health outcomes. Our goal is to provide accessible and comprehensive mental health training to individuals and organizations, regardless of their level of experience or expertise.</p>
        </div>
        <div className="image">
          <img src="/assets/new.png" alt="" />
        </div>
      </div>
      <a href="#about" className="arrow">
        <KeyboardDoubleArrowDownIcon />
      </a>
    </div>
  )
}

export default Landing
import "./topbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import Slide from 'react-reveal/Slide';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from "react-router-dom";
const TopBar = () => {

  const [open, setOpen] = useState(false);
  const [barOpen, setBarOpen] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open)
  }
  
  const barClick = () => {
    setBarOpen(!barOpen)
    console.log(barOpen)
  }

  return (
    <div className='topbar'>
      <div className="container">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="links">
          <Slide top>
            <ul id="ul" className={barOpen ? "open" : null}>
              <li><NavLink to="/" spy={true} smooth={true} duration={100} activeClass={"active"}>Home</NavLink></li>
              <li><a href="/#about" >About Us</a></li>
              <li><a href="/#services" >Our Services</a></li>
              <li><a href="/#team" >Our Team</a></li>
              <li><a href="/#whyChooseUs" >Why Choose Us</a></li>
              <li><a href="/#contact">Contact</a></li>
              <div className="drop">

                <li><a href="" onClick={handleClick}>Resources{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</a></li>
                <Slide top>
                  <div className={"box " + (open ? "active" : null)}>
                    <ul>
                      <li><a href="#">Frequently Asked Questions</a></li>
                      <li><a href="#">Links</a></li>
                      <li><a href="#">Videos</a></li>
                    </ul>
                  </div>
                </Slide>
              </div>
              <li><NavLink to="/blogs" activeClassName={"active"}>Blogs</NavLink></li>

            </ul>
          </Slide>
        </div>
        <div className="barIcon" onClick={barClick}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
    </div>
  )

}

export default TopBar
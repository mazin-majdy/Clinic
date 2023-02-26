import { Link } from "react-router-dom";
import "./topbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useState } from "react";
import Slide from 'react-reveal/Slide';

const TopBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open)
  }
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#services">Our Services</a></li>
            <li><a href="/#team">Our Team</a></li>
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

            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>

  )

}
export default TopBar
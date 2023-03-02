import "./contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <div className='contact' id="contact">
      <Fade>
        <h1 className="main-title">Contact Us</h1>

        <div className="content">
          <div className="text">
            <div className="contact-row">
              <LocationOnIcon />
              <p>Syria, Qamishli, Al Kournesh, near Rcell center.</p>
            </div>
            <div className="contact-row">
              <PhoneIcon />
              <p>+963 934 426 015</p>
            </div>
            <div className="contact-row">
              <EmailIcon />
              <p>clinic@gmail.com</p>
            </div>
            <p className="paragraph">We would love to hear from you! Please contact us if you have any questions or would like to learn more about our services.</p>
          </div>
        </div>
      </Fade>

    </div>
  )
}

export default Contact
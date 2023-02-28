import "./contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <div className='contact' id="contact">
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
          <p>Thank you for your interest in our business! We will get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
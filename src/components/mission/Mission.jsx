import "./mission.css";
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


const Mission = () => {
  return (
    <div className="mission" id="mission">
      <h1 className="main-title">Our Mission, Vision and Approach</h1>
      <Reveal>

        <div className="container">

          <div className="boxes">
            <Fade left>

              <div className="box">
                <div className="icon">
                  <CrisisAlertIcon sx={{ fontSize: 30 }} />
                </div>
                <div className="text">
                  <h2>Our Mission</h2>
                  <p>
                    Our mission is to provide high-quality mental health training and supervision that empowers individuals and organizations to improve mental health outcomes. We are committed to using evidence-based practices and a culturally responsive approach to ensure that our services are accessible, comprehensive, and tailored to the needs of each client.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="box">
                <div className="icon">
                  <VisibilityIcon sx={{ fontSize: 30 }} />
                </div>
                <div className="text">
                  <h2>Our Vision</h2>
                  <p>
                    Our vision is to create a world where mental health is prioritized and accessible to all. We believe that everyone deserves access to high-quality mental health services, and we are committed to breaking down barriers and promoting equity in mental health care. We strive to be leaders in the mental health field, using our expertise to drive innovation and improve outcomes for individuals, families, and communities.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade left>

              <div className="box">
                <div className="icon">
                  <MenuBookIcon sx={{ fontSize: 30 }} />
                </div>
                <div className="text">
                  <h2>Our Approach</h2>
                  <p>
                    Our approach is grounded in evidence-based practices and a commitment to cultural competency. We believe that mental health training should be accessible, comprehensive, and tailored to the needs of each client. Our goal is to provide high-quality training and supervision that empowers individuals and organizations to improve mental health outcomes. We take a client-centered approach to our services, focusing on the unique needs and goals of each individual or organization. We believe that mental health is a holistic concept that encompasses physical, emotional, and social well-being. Our services are designed to address each of these areas and support overall mental health.
                  </p>
                </div>
              </div>

            </Fade>


          </div>
            <div className="image">
          <Fade right>
              <img src="/assets/mission.jpg" alt="" className="main-img" />
          </Fade>
            </div>

        </div>

      </Reveal>

    </div >
  )
}
export default Mission;
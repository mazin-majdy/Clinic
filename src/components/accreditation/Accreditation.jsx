import "./accreditation.css"
import CheckIcon from '@mui/icons-material/Check';
import Fade from 'react-reveal/Fade';

const Accreditation = () => {
  return (
    <div className="accreditation">
      <h1 className="main-title">Accreditation</h1>
      <div className="container">

        <div className="text">
          <ul>
            <Fade bottom>
              <li>
                <CheckIcon sx={{ fontSize: 30 }} />
                We are proud to offer accredited training programs that meet the highest standards of quality and excellence in mental health training. All of our certificate programs are accredited by Resilience Clinics, a specialized mental health center located in Canada.
              </li>
            </Fade>

            <Fade bottom>
              <li>
                <CheckIcon sx={{ fontSize: 30 }} />
                We are proud to be a leader in the mental health field and are committed to meeting the highest standards of quality and excellence.
              </li>
            </Fade>

            <Fade bottom>
              <li>
                <CheckIcon sx={{ fontSize: 30 }} />
                Our center is proud to partner with Resilience Clinics, a specialized mental health center located in Canada. Resilience Clinics is dedicated to providing high-quality mental health services to individuals and families in need. Resilience Clinics is registered with the College of Registered Psychotherapists of Ontario (CRPO), which is responsible for regulating the practice of psychotherapy in Ontario and ensuring that all psychotherapists meet the highest standards of competency and ethical practice.
              </li>
            </Fade>

            <Fade bottom>
              <li>
                <CheckIcon sx={{ fontSize: 30 }} />
                Our partnership with Resilience Clinics allows us to collaborate with other mental health professionals to provide comprehensive and effective care to our clients. We are committed to working with reputable and qualified partners to ensure that our clients receive the best possible care and support.
              </li>
            </Fade>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Accreditation
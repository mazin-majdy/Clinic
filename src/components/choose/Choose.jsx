import "./choose.css";
import CheckIcon from '@mui/icons-material/Check';
import Fade from 'react-reveal/Fade';


const Choose = () => {
  return (
    <div id="whyChooseUs" className="choose">
      <h1 className="main-title">Why Choose Us</h1>
      <div className="container">

        <div className="list">
          <ul>
            <Fade left >
              <li><CheckIcon sx={{ fontSize: 30 }} />Experienced mental health professionals</li>
            </Fade>

            <Fade left>
              <li><CheckIcon sx={{ fontSize: 30 }} />Specialized and non-specialized training programs, including diploma and short-term programs</li>
            </Fade>

            <Fade left>
              <li><CheckIcon sx={{ fontSize: 30 }} />Customized solutions tailored to your needs</li>
            </Fade>

            <Fade left>
              <li><CheckIcon sx={{ fontSize: 30 }} />Evidence-based practices and a commitment to cultural competency</li>
            </Fade>

            <Fade left>
              <li><CheckIcon sx={{ fontSize: 30 }} />High-quality resources and support</li>
            </Fade>
          </ul>
        </div>

        <div className="image">
          <Fade bottom>
            <img src="/assets/why-choose-us.png" alt="" />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Choose
import "./about.css"
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="main-title">About Us</h1>
      <div className="container">
        <Slide left>

          <div className="image">
            <img src="/assets/about.jpg" alt="" className="main-img" />
          </div>
        </Slide>
        <Slide right>

          <div className="text">
            <p>
              Our team is comprised of mental health professionals with years of experience in the field. We are passionate about improving mental health outcomes and believe that proper training and evaluation can make a big difference. Our goal is to provide the highest quality resources and support to our clients.
            </p>
          </div>
        </Slide>

      </div>
    </div>
  )
}

export default About
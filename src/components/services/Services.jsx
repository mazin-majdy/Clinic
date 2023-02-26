import ServicesBox from "../serviceBox/ServiceBox";
import "./services.css";
import Slide from 'react-reveal/Slide';

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="main-title">Services</h2>
      <Slide bottom>

        <div className="container">
          <ServicesBox />
        </div>

      </Slide>
    </div>
  )
}

export default Services
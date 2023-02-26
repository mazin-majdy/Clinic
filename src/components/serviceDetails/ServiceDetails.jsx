import { Link, useParams } from "react-router-dom";
import Navbar from "../topbar/TopBar";
import "./serviceDetails.css";
import { serviceText } from "../../data";
import { trainingPrograms } from "../../data";
import TrainingPrograms from "../trainingPrograms/TrainingPrograms";
import Slide from 'react-reveal/Slide';

const ServiceDetails = () => {
  const param = useParams();
  const { title, text } = serviceText[param.id - 1]

  console.log(param.id)
  return (
    <div className="servicesDetails">
      <Navbar />
      <Slide left>
        <div className="servicesDetailsContainer">
          <div className="text">
            <h1 className="second-title">{param.id + ". " + title}</h1>
            <p>
              {text}
            </p>
          </div>

          {param.id === '1' ? (
            <div className="trainingPrograms">
              <TrainingPrograms id={trainingPrograms[0].id} title={trainingPrograms[0].head} text={trainingPrograms[0].paragraph} />
              <TrainingPrograms id={trainingPrograms[1].id} title={trainingPrograms[1].head} text={trainingPrograms[1].paragraph} />
              <TrainingPrograms id={trainingPrograms[2].id} title={trainingPrograms[2].head} text={trainingPrograms[2].paragraph} />
              <TrainingPrograms id={trainingPrograms[3].id} title={trainingPrograms[3].head} text={trainingPrograms[3].paragraph} />
            </div>
          ) : null
          }
          <div className="button">

            <Link to="/">
              <button className="glow-on-hover" type="button">Back</button>
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default ServiceDetails
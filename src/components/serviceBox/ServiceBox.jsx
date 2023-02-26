import "../services/services.css";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { serviceText } from "../../data";
import { Link } from "react-router-dom";


const ServicesBox = () => {
  return(
    serviceText.map((ele,index) => {
      return (
        <div key={index} className="box">
          <div className="icon">
            <PsychologyIcon sx={{ fontSize: 80 }} />
          </div>
          <h3>{ele.title}</h3>
          <div className="info">
            <Link to={`/service/${ele.id}`}>Details</Link>
          </div>
        </div>
      )
    })
  )

}
export default ServicesBox;
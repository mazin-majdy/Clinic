import "../services/services.css";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { serviceText } from "../../data";
import { NavLink } from "react-router-dom";
import { useRef } from "react";


const ServicesBox = () => {
  if (serviceText.length - 1 % 2 !== 0) {
    serviceText[serviceText.length - 1].class = "last";

  }

  const topRef = useRef(null);

  const handleClick = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
    // navigate to second page
    
  }
  return (
    serviceText.map((ele, index) => {
      return (
        <div key={index} className={`box ` + (ele.class === "last" && "last")}>
          <div className="icon">
            <PsychologyIcon sx={{ fontSize: 80 }} />
          </div>
          <h3>{ele.title}</h3>
          <div className="info">
            <NavLink to={`/service/${ele.id}`} onClick={handleClick}>Details</NavLink>
          </div>
        </div>
      )
    })
  )

}
export default ServicesBox;
import "../services/services.css";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { serviceText } from "../../data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const ServicesBox = () => {
  const [last, setLast] = useState(false);

  if (serviceText.length - 1 % 2 !== 0) {
    // serviceText[serviceText.length-1].className = "mazin";
    serviceText[serviceText.length - 1].class = "last";

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
            <Link to={`/service/${ele.id}`}>Details</Link>
          </div>
        </div>
      )
    })
  )

}
export default ServicesBox;
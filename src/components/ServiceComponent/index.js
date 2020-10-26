import React, { useState, useEffect } from "react";
// import DoctorCard from "./DoctorCard";
// import doctorDetails from '../static/data/doctorsDetails';

import RadioButtonComponent from "../RadioButtonComponent";
import "./index.css";

const ServiceComponent = (props) => {
  const [services, setServices] = useState([
    "Khám Da",
    "Khám Cúm",
    "Khám Răng",
  ]);
  return (
    <div className="uk-section-default uk-section uk-section-xsmall content-section">
      <div className="uk-container uk-container-small">
        <div className="first-col">
          <h2>Bạn đến khám gì ?</h2>
          <div className="location-row">
            {services.map(x => <RadioButtonComponent name={x} path="/location"/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;

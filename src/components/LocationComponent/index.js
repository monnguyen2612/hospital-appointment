import React, { useState, useEffect } from "react";
// import DoctorCard from "./DoctorCard";
// import doctorDetails from '../static/data/doctorsDetails';

import RadioButtonComponent from "../RadioButtonComponent";
import "./index.css";

const LocationComponent = (props) => {
  const [services, setServices] = useState([
    "Từ Dũ",
    "Đại Học Y Dược",
    "Quận 1",
    "Quận 2",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
  ]);
  //   useEffect(() => {
  //     fetch(`${process.env.REACT_APP_SERVER_URL}/doctors/${hospitalId}`)
  //       .then((response) => response.json())
  //       .catch((data) => {

  // const mappedArray = data.map((doctor) => {

  //   return (
  //     <DoctorCard
  //       history={history}
  //       location={location}
  //       id={doctor.did}
  //       key={doctor.did}
  //       name={doctor.name}
  //       doctorImageUrl={doctor.img_url}
  //       degrees={doctor.qualification}
  //       departments={doctor.departments}
  //       experience={doctor.years_of_exp}
  //       description={doctor.description}
  //       daysAvailable={doctor.days_available}
  //       timings={doctor.timings}
  //     />
  //   );
  // });
  // setDoctorsArray(mappedArray);
  //   })
  //   .catch((err) => console.log("failed to fetch"));
  // }, [hospitalId, history, location]);
  const chunkedArr = Array.from({ length: Math.ceil(services.length / 3) }, (v, i) =>
  services.slice(i * 3, i * 3 + 3)
)
  return (
    <div className="uk-section-default uk-section uk-section-xsmall content-section">
      <div className="uk-container uk-container-small">
        <div className="first-col">
          <h2>Địa điểm ?</h2>
          {chunkedArr.map(arr => <div className="location-row">
            {arr.map(x => <RadioButtonComponent name={x} path="/hospital-page/123"/>)}
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;

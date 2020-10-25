import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
// import doctorDetails from '../static/data/doctorsDetails';
import "./Doctors.css";

const Doctors = (props) => {
  const [doctorsArray, setDoctorsArray] = useState([
  
  ]);
  const { history, location, match } = props;
  const { hospitalId } = match.params;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/doctors/${hospitalId}`)
      .then((response) => response.json())
      .catch((data) => {
        data =  [{
          id: 1,
          name: "Mai Nam Hải",
          img_url:
            "https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg?auto=format",
          degrees: "Bachelor",
          departments: "OPD, Gynac, Ortho",
          years_of_exp: "5",
          description: "Y khoa",
          days_available: 'Mon - Fri',
          timings: '8:30PM to 9:30PM',
        }];
        const mappedArray = data.map((doctor) => {
          // const { depts: departments } = doctor;
          // const departmentsArray = departments.map((department) => (
          //   <div key={department} className="department-shape">
          //     {department}
          //   </div>
          // ));
          
          return (
            <DoctorCard
              history={history}
              location={location}
              id={doctor.did}
              key={doctor.did}
              name={doctor.name}
              doctorImageUrl={doctor.img_url}
              degrees={doctor.qualification}
              departments={doctor.departments}
              experience={doctor.years_of_exp}
              description={doctor.description}
              daysAvailable={doctor.days_available}
              timings={doctor.timings}
            />
          );
        });
        setDoctorsArray(mappedArray);
      })
      .catch((err) => console.log("failed to fetch"));
  }, [hospitalId, history, location]);

  return (
    <div className="doctors-container">
      <div className="heading">Bác Sĩ</div>
      <div className="subheading">Chọn bác sĩ mà bạn muốn</div>
      <hr />
      {doctorsArray}
    </div>
  );
};

export default Doctors;

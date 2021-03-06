import React, { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";
import MessageCard from "../components/MessageCard";
import RadioButtonComponent from "../components/RadioButtonComponent";

import isAfter from "date-fns/isAfter";
import isSameDay from "date-fns/isSameDay";
import "./BookingPage.css";

const BookingPage = (props) => {
  const { history, location, match } = props;
  const [patientName, setPatientName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [dateOfAppointment, setDateOfAppointment] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [departmentsArray, setDepartmentsArray] = useState("");
  const [description, setDescription] = useState("");
  const [doctorImage, setDoctorImage] = useState("");
  const [qualification, setQualificiation] = useState("");
  const [timings, setTimings] = useState("");
  const [experience, setExperience] = useState("");
  const [daysAvailable, setDaysAvailable] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [hospitalName] = useState("");
  const [services, setServices] = useState([
    ["7:00"],
    ["8:00"],
    ["9:00"],
    ["10:00"],
    ["11:00"],
    ["12:00"],
    ["13:00"],
    ["14:00"],
    ["15:00"],
    ["16:00"],
    ["17:00"],
    ["18:00"],
  ]);

  const { hospitalId, doctorId } = match.params;

  const onInputChange = (event, setValue) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/doctors/${hospitalId}/${doctorId}`
    )
      .then((response) => response.json())
      .catch((data) => {
        data.doctor = {
          id: 1,
          name: "Mai Nam Hải",
          img_url:
            "https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg?auto=format",
          degrees: "Bachelor",
          departments: "OPD, Gynac, Ortho",
          years_of_exp: "5",
          description: "Y khoa",
          days_available: "Mon - Fri",
          timings: "8:30PM to 9:30PM",
        };
        console.log(data.doctor);
        console.log(data.hospital);
        setDoctorName(data.doctor.name);
        setExperience(data.doctor.years_of_exp);
        setDoctorImage(data.doctor.img_url);
        setQualificiation(data.doctor.qualification);
        setDescription(data.doctor.description);
        setTimings(data.doctor.timings);
        setDepartmentsArray(data.doctor.departments);
        setDaysAvailable(data.doctor.days_available);
        // setHospitalName(data.hospital.name);
        // const { depts: departments } = data.doctor;
        // setDepartmentsArray(departments.map((department) => (
        //   <div key={department} className="department-shape">
        //     {department}
        //   </div>
        // )));
      });
  }, [doctorId, hospitalId]);

  const dataValidator = () => {
    let invalidCount = 0;
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const enteredDateArray = dateOfAppointment.split("-");
    console.log(
      enteredDateArray,
      currentYear,
      currentMonth,
      currentDate,
      "entered date array"
    );
    if (patientName === null || patientName === "") {
      setMessage("Tên sai định dạng");
      setMessageType("alert-danger");
      invalidCount += 1;
    } else if (
      age === 0 ||
      age === "" ||
      age.length > 3 ||
      age === null ||
      isNaN(age)
    ) {
      setMessage("Tuổi sai định dạng");
      setMessageType("alert-danger");
      invalidCount += 1;
    } else if (address === null || address === "") {
      setMessage("Địa chỉ sai định dạng");
      setMessageType("alert-danger");
      invalidCount += 1;
    } else if (
      !isAfter(new Date(dateOfAppointment), new Date()) &&
      !isSameDay(new Date(dateOfAppointment), new Date())
    ) {
      console.log(new Date(dateOfAppointment), new Date());
      setMessage("Ngày sai định dạng");
      setMessageType("alert-danger");
      invalidCount += 1;
    } else if (
      String(contactNumber).length !== 10 ||
      isNaN(contactNumber) ||
      contactNumber === ""
    ) {
      setMessage("Số điện thoại sai định dạng");
      setMessageType("alert-danger");
      invalidCount += 1;
    } else if (reg.test(email) === false || email === "") {
      setMessage("Email sai định dạng");
      setMessageType("alert-danger");
      invalidCount += 1;
    }
    if (invalidCount === 0) {
      return true;
    }
    return false;
  };

  const onBookButtonClick = () => {
    if (dataValidator()) {
      setMessageType("alert-info");
      setMessage("Booking appointment. Please wait.");
      fetch(
        `${process.env.REACT_APP_SERVER_URL}/booking-appointment/${hospitalId}/${doctorId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: patientName,
            address,
            age,
            email,
            number: contactNumber,
            date: dateOfAppointment,
            hospital_name: hospitalName,
            doctor_name: doctorName,
            time: timings,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data === "success") {
            setMessage(
              "Your appointment has been booked. Kindly check your email."
            );
            setMessageType("alert-success");
          } else {
            setMessage("Unable to book appointment");
            setMessageType("alert-danger");
            console.log(data);
          }
          setPatientName("");
          setAge("");
          setAddress("");
          setContactNumber("");
          setDateOfAppointment("");
          setEmail("");
        })
        .catch((data) => {
          setMessage("Hệ thống lỗi vui lòng đặt lại");
          setMessageType("alert-danger");
        });
    }
  };
  const chunkedArr = Array.from(
    { length: Math.ceil(services.length / 3) },
    (v, i) => services.slice(i * 3, i * 3 + 3)
  );

  return (
    <div className="booking-form-container">
      <div className="heading">Đơn đặt lịch hẹn</div>
      <br />
      <div style={{ color: "gray", marginBottom: "5px" }}>
        Bạn đang đặt lịch hẹn cho bác sĩ làm việc tại bệnh viện: &nbsp;
        {hospitalName}
      </div>
      <DoctorCard
        history={history}
        location={location}
        id={doctorId}
        key={doctorId}
        name={doctorName}
        degrees={qualification}
        departments={departmentsArray}
        experience={experience}
        description={description}
        daysAvailable={daysAvailable}
        timings={timings}
        doctorImageUrl={doctorImage}
        bookButtonHidden
      />
      <br />
      <div style={{ color: "#69d5b1", fontSize: "20px" }}>
        Vui lòng cung cấp các chi tiết sau để xác nhận cuộc hẹn của bạn
      </div>
      <br />
      <div
        style={{ marginTop: "10px", marginBottom: "5px", marginLeft: "5px" }}
      >
        Tên Bệnh Nhân:
      </div>
      <div>
        <input
          type="text"
          className="form-textfield"
          placeholder="Nhập tên"
          value={patientName}
          onChange={(event) => {
            onInputChange(event, setPatientName);
          }}
        />
      </div>
      <div
        style={{ marginTop: "10px", marginBottom: "5px", marginLeft: "5px" }}
      >
        Tuổi:
      </div>
      <div>
        <input
          type="text"
          placeholder="Nhập tuổi"
          className="form-textfield"
          value={age}
          onChange={(event) => {
            onInputChange(event, setAge);
          }}
        />
      </div>
      <div
        style={{ marginTop: "10px", marginBottom: "5px", marginLeft: "5px" }}
      >
        Địa chỉ
      </div>
      <div>
        <input
          type="text"
          placeholder="Nhập địa chỉ"
          className="form-textfield"
          value={address}
          onChange={(event) => {
            onInputChange(event, setAddress);
          }}
        />
      </div>
      <div
        style={{ marginTop: "10px", marginBottom: "5px", marginLeft: "5px" }}
      >
        Ngày hẹn
      </div>
      <div style={{ marginBottom: "40px" }}>
        <input
          type="date"
          className="form-textfield"
          value={dateOfAppointment}
          onChange={(event) => {
            onInputChange(event, setDateOfAppointment);
          }}
        />
      </div>
      {dateOfAppointment
        ? chunkedArr.map((arr) => (
            <div className="location-row">
              {arr.map((x) => (
                <RadioButtonComponent name={x} />
              ))}
            </div>
          ))
        : null}
      <div
        style={{ marginTop: "10px", marginBottom: "5px", marginLeft: "5px" }}
      >
        Số điện thoại liên hệ
      </div>
      <div>
        <input
          type="text"
          placeholder="Nhập số điện thoại"
          className="form-textfield"
          value={contactNumber}
          onChange={(event) => {
            onInputChange(event, setContactNumber);
          }}
        />
      </div>
      <div
        style={{ marginTop: "10px", marginBottom: "5px", marginLeft: "5px" }}
      >
        Email
      </div>
      <div>
        <input
          type="text"
          placeholder="Nhập email address"
          className="form-textfield"
          value={email}
          onChange={(event) => {
            onInputChange(event, setEmail);
          }}
        />
      </div>
      <div className="ma2">
        <MessageCard message={message} messageType={messageType} />
      </div>
      <div className="button-wrapper">
        <button type="filled" onClick={onBookButtonClick}>
          Đặt lịch hẹn
        </button>
      </div>
    </div>
  );
};

export default BookingPage;

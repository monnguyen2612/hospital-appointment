import React, { useEffect, useState } from 'react';
import './HospitalDetails.css';

const HospitalDetails = (props) => {
  const { hospitalId } = props.match.params;
  const [name, setName] = useState('Từ Dũ');
  const [address, setAddress] = useState('284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh');
  const [number, setNumber] = useState('031231202');
  const [mapUrl, setMapUrl] = useState('https://www.google.com/maps/place/284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh');
  const [departmentsArray, setDepartmentsArray] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/hospitalPage/${hospitalId}`)
      .then((response) => response.json())
      .then((data) => {
        setAddress(data[0].address);
        setName(data[0].name);
        setNumber(data[0].number);
        setMapUrl(`https://www.google.com/maps/place/${data[0].address}`);
        const { depts: departments } = data[0];
        setDepartmentsArray(departments.map((department) => (
          <div key={department} className="department-shape">
            {department}
          </div>
        )));
      })
      .catch((err) => console.log('failed to fetch'));
  }, [hospitalId]);


  return (
    <div className="hospital-details-container row">
      <div className="col-md-6">
        <div className="hospital-name">
          {name}
        </div>
        <div className="hospital-address">
          {address}
        </div>
        <div style={{ margin: '10px', marginLeft: '0px' }}>
          {departmentsArray}
        </div>
      </div>
      <div className="col-md-6 button-container">
        <a href={`tel:${number}`}><button className="call-now-button" type="filled">Liên hệ</button></a>
        <br />
        {
        console.log(address)
        }
        <a href={mapUrl} rel="noopener noreferrer" target="_blank"><button className="get-directions-button" type="filled">Tìm đường đi</button></a>
      </div>
    </div>
  );
};

export default HospitalDetails;

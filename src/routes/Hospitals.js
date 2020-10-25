import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
// import hospitalsAndDetails from '../static/data/hospitalsAndDetails';
import Search from '../components/Search';
import HospitalCard from '../components/HospitalCard';
import './Hospitals.css';

const Hospitals = (props) => {
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalCards, setHospitalCards] = useState([]);
  const hospitalDetails = useRef([{
    hid: 123,
    name: "Từ Dũ",
    address: "284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
    depts: []
  },{
    hid: 123,
    name: "Từ Dũ",
    address: "284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
    depts: []
  }]);
  const { history } = props;

  // The following function accepts and array of hospital details
  // It maps those details into the card and update it on the webpage
  const updateHospitalCards = useCallback((details) => {
    setHospitalCards(details.map((hospital) => (
      <HospitalCard
        history={history}
        id={hospital.hid}
        key={hospital.hid}
        hospitalName={hospital.name}
        address={hospital.address}
        departments={hospital.depts}
        timings={hospital.timings}
      />
    )));
  }, [setHospitalCards, history]);
  // console.log('test');
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/hospitals`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        hospitalDetails.current = data;
        updateHospitalCards([{
          hid: 123,
          name: "Từ Dũ",
          address: "284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
        },{
          hid: 123,
          name: "Từ Dũ",
          address: "284 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh",
        }]);
      });
  }, [updateHospitalCards]);

  // The following effect is triggered when the webpage is mounted
  // It is used to intialize the cards on the page when it is mounted
  // useEffect(() => {
  //   updateHospitalCards(hospitalDetails.current);
  // }, [updateHospitalCards]);

  // The following function filters the details of the hospitals based on
  // hospitalName, if there is a match then those values are retained.
  // Finally to reflect it on the frontend, we call updateHospitalCards()
  const onSearchQuery = (hospitalNameRecieved) => {
    const filteredDetails = hospitalDetails.current.filter(
      (details) => details.name.toLowerCase().includes(hospitalNameRecieved.toLowerCase()),
    );
    updateHospitalCards(filteredDetails);
  };

  return (
    <div>
      <div className="first-section">
        <div className="searchbar">
          <Search
            onSearchQuery={onSearchQuery}
            setHospitalName={setHospitalName}
            hospitalName={hospitalName}
          />
          <div className="searchbar-description">Tìm kiếm bệnh viện theo tên để đặt lịch hẹn của bạn</div>
        </div>
      </div>
      <div className="hospital-cards-container">
        <hr />
        {hospitalCards}
      </div>
    </div>
  );
};

Hospitals.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Hospitals;

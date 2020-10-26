import React from 'react';
import ServiceComponent from '../components/ServiceComponent';
import Doctors from '../components/Doctors';

const LocationPage = (props) => {
  const { history, location, match } = props;
  return (
    <div>
      <ServiceComponent match={match} />
    </div>
  );
};

export default LocationPage;

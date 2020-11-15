import React from 'react';
import ServiceComponent from '../components/ServiceComponent';

const LocationPage = (props) => {
  const {  match } = props;
  return (
    <div>
      <ServiceComponent match={match} />
    </div>
  );
};

export default LocationPage;

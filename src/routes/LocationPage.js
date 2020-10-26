import React from 'react';
import LocationComponent from '../components/LocationComponent';

const LocationPage = (props) => {
  const { history, location, match } = props;
  return (
    <div>
      <LocationComponent match={match} />
    </div>
  );
};

export default LocationPage;

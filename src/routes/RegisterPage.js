import React from 'react';
import RegisterComponent from '../components/RegisterComponent';

const RegisterPage = (props) => {
  const { history, location, match } = props;
  return (
    <div>
      <RegisterComponent/>
    </div>
  );
};

export default RegisterPage;

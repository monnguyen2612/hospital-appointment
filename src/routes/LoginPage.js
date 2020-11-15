import React from 'react';
import LoginComponent from '../components/LoginComponent';

const LoginPage = (props) => {
  const { history, location, match } = props;
  return (
    <div>
      <LoginComponent/>
    </div>
  );
};

export default LoginPage;

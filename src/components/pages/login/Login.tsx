import React from 'react';
import './Login.scss';

import { Card, SlideTab } from 'components/core';

const Login = () => {
  return (
    <div className="container">
      <Card className="login">
        <h3 className="login__title">Login</h3>
        <SlideTab tabHeader={['User', 'Mechanic']}>
          <span>User</span>
          <span>Mehanic</span>
        </SlideTab>
      </Card>
    </div>
  );
};

export default Login;

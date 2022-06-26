import { useState } from 'react';

import { Input } from 'components/core';
import Auth from './Auth';
import { Link, useNavigate } from 'react-router-dom';
import { verifyMechanic, verifyUser } from 'service/Service';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = (choice: string) => {
    console.log(choice, email, password);
    setEmail('');
    setPassword('');

    if (choice === 'User') {
      if (verifyUser(email, password)) {
        navigate('/search-mechanics');
      }
    } else {
      if (verifyMechanic(email, password)) {
        navigate('/service-requests');
      }
    }
  };

  return (
    <Auth
      title="Login"
      onSubmit={onSubmit}
      footer={
        <span className="auth__form__footer">
          Not Registered? <Link to="/signup">Sign Up Here</Link>
        </span>
      }
    >
      <Input label="Email" value={email} onChangeText={(e) => setEmail(e)} />
      <Input
        type="password"
        label="Password"
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
    </Auth>
  );
};

export default Login;

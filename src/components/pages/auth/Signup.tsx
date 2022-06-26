import { useState } from 'react';

import { Input } from 'components/core';
import Auth from './Auth';
import { Link, useNavigate } from 'react-router-dom';
import { MechanicType, User } from 'service/Type';
import { addMechanic, addUser } from 'service/Service';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = (choice: string) => {
    console.log(choice, email, password);
    setEmail('');
    setPassword('');

    if (choice === 'User') {
      const user: User = {
        id: 0,
        name: email,
        email: email,
        password: password,
        contact: contact
      };

      addUser(user);
    } else {
      const mechanic: MechanicType = {
        id: 0,
        name: email,
        email: email,
        password: password,
        contact: contact,
        vehicle: 'all',
        rating: '1',
        price: '100',
        distance: '1',
        experience: '1+'
      };
      addMechanic(mechanic);
    }
    navigate('/login');
  };

  return (
    <Auth
      title="Sign Up"
      onSubmit={onSubmit}
      footer={
        <span className="auth__form__footer">
          Already Registered? <Link to="/login">Login Here</Link>
        </span>
      }
    >
      <Input label="Email" value={email} onChangeText={(e) => setEmail(e)} />
      <Input label="Contact No." value={contact} onChangeText={(e) => setContact(e)} />
      <Input
        type="password"
        label="Password"
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      <Input
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e)}
      />
    </Auth>
  );
};

export default Signup;

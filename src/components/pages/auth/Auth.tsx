/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import './Auth.scss';

import { Button, Card, Form, SlideSwitch } from 'components/core';

type Props = {
  title: string;
  onSubmit?: (choice: string) => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const chioceList = ['User', 'Mechanic'];

const Auth = ({ title, onSubmit, children, footer }: Props) => {
  const [choice, setChoice] = useState(0);

  return (
    <div className="container">
      <Card className="auth">
        <h3 className="auth__title">{title}</h3>
        <SlideSwitch
          selected={choice}
          chioceList={chioceList}
          onChange={(choice) => {
            setChoice(choice);
          }}
        />
        <Form
          className="auth__form"
          onSubmit={() => {
            onSubmit && onSubmit(chioceList[choice]);
          }}
        >
          {children}
          <Button className="auth__form__button" color="primary">
            {title}
          </Button>
          {footer}
        </Form>
      </Card>
    </div>
  );
};

export default Auth;

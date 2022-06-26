import React, { useEffect, useState } from 'react';

import './SearchMechanic.scss';

import { Button, Card, Form, Input, Popup } from 'components/core';
import { addRequest, getAllMechanics, getCurrentUser } from 'service/Service';
import { MechanicType, RequestType } from 'service/Type';
import Mechanic from './Mechanic';
import moment from 'moment';

const initialMechanics: MechanicType[] = [];

const SearchMechanic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mechanics, setMechanics] = useState(initialMechanics);
  const [selectedMechanicId, setSelectedMechanicId] = useState(0);

  const [carModel, setCarModel] = useState('');
  const [subject, setSubject] = useState('');
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const mechanics = getAllMechanics();
    setMechanics(mechanics);

    return () => {
      setMechanics([]);
    };
  }, []);

  const onSubmit = () => {
    const request: RequestType = {
      userId: getCurrentUser(),
      mechanicId: selectedMechanicId,
      carModel: carModel,
      subject: subject,
      contact: contact,
      location: location,
      content: content,
      datetime: moment().format('DD MMM YYYY h:mm A')
    };
    addRequest(request);
    setIsVisible(false);
  };

  return (
    <div className="container">
      <Card className="search-mechanic">
        <div className="search-mechanic__selection">
          <Input placeholder="Choose Your Car" />
          <Button color="primary">Find mechanics</Button>
        </div>
        <div className="search-mechanic__list">
          {mechanics.map(({ id, name, experience, vehicle, rating, price, distance }, index) => (
            <Mechanic
              key={index}
              id={id}
              name={name}
              experience={experience}
              vehicle={vehicle}
              rating={rating}
              price={price}
              distance={distance}
              onSendRequest={(id) => {
                setIsVisible(true);
                setSelectedMechanicId(id);
              }}
            />
          ))}
        </div>
      </Card>
      <Popup className="complaint" isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <h4 className="complaint__header">Complaint Form</h4>
        <Form className="complaint__form" onSubmit={onSubmit}>
          <Input label="Car Model" value={carModel} onChangeText={(e) => setCarModel(e)} />
          <Input label="Subject" value={subject} onChangeText={(e) => setSubject(e)} />
          <Input label="Location" value={location} onChangeText={(e) => setLocation(e)} />
          <Input label="Contact" value={contact} onChangeText={(e) => setContact(e)} />
          <Input label="Description" value={content} onChangeText={(e) => setContent(e)} />
          <Button className="complaint__form__button" color="primary">
            Send
          </Button>
        </Form>
      </Popup>
    </div>
  );
};

export default SearchMechanic;

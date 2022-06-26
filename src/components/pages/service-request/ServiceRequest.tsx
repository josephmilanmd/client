import './ServiceRequest.scss';
import { Card } from 'components/core';
import { Icon } from 'components/icons';
import { BriefCaseIcon } from 'components/icons/IconList';
import Request from './Request';
import { RequestType } from 'service/Type';
import { useEffect, useState } from 'react';
import { getRequests } from 'service/Service';

const initialRequest: RequestType[] = [];

const ServiceRequest = () => {
  const [requestList, setRequestList] = useState(initialRequest);

  useEffect(() => {
    const requestList = getRequests();
    setRequestList(requestList);

    return () => {
      setRequestList([]);
    };
  }, []);
  return (
    <div className="container">
      <Card className="service-request">
        <h2 className="service-request__header">
          <Icon
            name={BriefCaseIcon}
            className="service-request__header__icon"
            width="3rem"
            height="3rem"
          />
          Service Requests
        </h2>
        <div className="service-request__list">
          {requestList.map(({ carModel, subject, datetime, location, contact, content }, index) => (
            <Request
              key={index}
              carModel={carModel}
              subject={subject}
              datetime={datetime}
              location={location}
              contact={contact}
              content={content}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ServiceRequest;

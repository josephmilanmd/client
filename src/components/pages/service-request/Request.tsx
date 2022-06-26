import { Button, Card } from 'components/core';
import { Icon } from 'components/icons';
import { CalendarIcon, MapIcon, PhoneIcon } from 'components/icons/IconList';

type Props = {
  className?: string;
  carModel: string;
  subject: string;
  datetime: string;
  location: string;
  contact: string;
  content: string;
};

const Request = ({
  className = '',
  carModel,
  subject,
  datetime,
  location,
  contact,
  content
}: Props) => {
  const onShowDirection = () => {
    window.location.assign(`http://maps.google.com/?q=${location}`);
  };

  return (
    <Card className={`request ${className}`}>
      <h3 className="request__header">
        {carModel} / {subject}
      </h3>
      <div className="request__subheader">
        <span className="request__subheader__item">
          <Icon className="request__subheader__item__icon" name={CalendarIcon} />
          {datetime}
        </span>
        <span className="request__subheader__item">
          <Icon className="request__subheader__item__icon" name={MapIcon} />
          {location}
        </span>
        <span className="request__subheader__item">
          <Icon className="request__subheader__item__icon" name={PhoneIcon} />
          {contact}
        </span>
      </div>
      <span className="request__complaint">{content}</span>
      <div className="request__choice">
        <Button onClick={onShowDirection} className="request__choice__button" color="primary">
          Show Direction
        </Button>
      </div>
    </Card>
  );
};

export default Request;

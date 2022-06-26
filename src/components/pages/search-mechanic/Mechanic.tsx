import { Avatar, Button, Card } from 'components/core';
import { Icon } from 'components/icons';
import { StarIcon } from 'components/icons/IconList';

type Props = {
  className?: string;
  id: number;
  name: string;
  experience: string;
  vehicle: string;
  rating: string;
  price: string;
  distance: string;
  onSendRequest: (id: number) => void;
};

const Mechanic = ({
  className = '',
  id,
  name,
  experience,
  vehicle,
  rating,
  price,
  distance,
  onSendRequest
}: Props) => {
  return (
    <Card className={`mechanic ${className}`}>
      <Avatar className="mechanic__pic" name={name} size={1.5} />
      <div className="mechanic__details">
        <span className="mechanic__details__name">{name}</span>
        <span className="mechanic__details__exp">Exp: {experience} years</span>
        <span className="mechanic__details__vehicle">Vehicle: {vehicle}</span>
        <span className="mechanic__details__rating">
          {rating}{' '}
          <Icon
            className="mechanic__details__rating__icon"
            name={StarIcon}
            width="0.55rem"
            height="0.55rem"
          />
        </span>
      </div>
      <div className="mechanic__other-details">
        <span className="mechanic__other-details__price">Price per hour: {price}</span>
        <span className="mechanic__other-details__distance">{distance} Km away</span>
      </div>
      <Button
        type="button"
        onClick={() => onSendRequest(id)}
        className="mechanic__send-request"
        color="primary"
      >
        Send Request
      </Button>
    </Card>
  );
};

export default Mechanic;

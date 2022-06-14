import React from 'react';
import './Card.scss';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = '', children }: Props) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;

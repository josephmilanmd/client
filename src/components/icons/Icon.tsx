import React, { CSSProperties } from 'react';
import './Icon.scss';

type Props = {
  name: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
};

export interface IconCSS extends CSSProperties {
  '--width': string;
  '--height': string;
}

const Icon = ({ name, className = '', width = '1rem', height = '1rem' }: Props) => {
  return (
    <span
      className={`icon ${className}`}
      style={{ '--width': width, '--height': height } as IconCSS}
    >
      {name}
    </span>
  );
};

export default Icon;

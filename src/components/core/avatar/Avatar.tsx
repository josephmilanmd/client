import { CSSProperties } from 'react';
import './Avatar.scss';

type Props = {
  className?: string;
  src?: string;
  name: string;
  size?: number;
};

export interface AvatarCSS extends CSSProperties {
  '--size': number;
}

const COLOR_LIST = [
  '#FF6363',
  '#F8B400',
  '#125B50',
  '#7FB5FF',
  '#CE49BF',
  '#8479E1',
  '#D49B54',
  '#C65D7B',
  '#FF7BA9',
  '#398AB9'
];

const Avatar = ({ className = '', src, name, size }: Props) => {
  const getInitial = (name: string) => {
    let initial = '';

    if (name != null)
      initial = name
        .split(' ')
        .reduce((previousValue, currentValue) => previousValue + currentValue.charAt(0), initial)
        .slice(0, 2);

    return initial;
  };

  const getRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return COLOR_LIST[randomNumber];
  };

  return (
    <span
      className={`avatar ${className}`}
      style={{ '--size': size, backgroundColor: getRandomColor() } as AvatarCSS}
    >
      {src && src != '' ? (
        <img className="avatar__img" src={src} alt={name} />
      ) : (
        <span className="avatar__initial">{getInitial(name)}</span>
      )}
    </span>
  );
};

export default Avatar;

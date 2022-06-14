import React, { MouseEvent } from 'react';
import './Button.scss';

type Props = {
  className?: string;
  color?: 'primary' | 'secondary' | 'no-color';
  size?: 'large' | 'small';
  hasRippleEffect?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({
  className = '',
  color = 'no-color',
  size = 'small',
  hasRippleEffect = true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLButtonElement>) => {
  const clickEvent = (event: MouseEvent) => {
    if (hasRippleEffect) {
      const currentNode: HTMLButtonElement = event.target as HTMLButtonElement;
      const parentNode: HTMLElement = currentNode.offsetParent as HTMLElement;

      const x = currentNode.clientWidth / 2;
      const y = currentNode.clientHeight / 2;

      console.log(event, event.clientY, currentNode.offsetTop, parentNode.offsetTop, y);

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      currentNode.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    }

    onClick();
  };

  return (
    <button className={`button ${size} ${color} ${className}`} {...rest} onClick={clickEvent}>
      {children}
    </button>
  );
};

export default Button;

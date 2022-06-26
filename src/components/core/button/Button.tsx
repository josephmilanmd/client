import React, { MouseEvent } from 'react';
import './Button.scss';

type Props = {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  color?: 'primary' | 'secondary' | 'no-color';
  size?: 'large' | 'small';
  hasRippleEffect?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({
  className = '',
  type,
  color = 'no-color',
  size = 'small',
  hasRippleEffect = true,
  onClick,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLButtonElement>) => {
  const clickEvent = (event: MouseEvent) => {
    if (hasRippleEffect) {
      const currentNode: HTMLButtonElement = event.target as HTMLButtonElement;
      // const parentNode: HTMLElement = currentNode.offsetParent as HTMLElement;

      const x = currentNode.clientWidth / 2;
      const y = currentNode.clientHeight / 2;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      currentNode.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 500);
    }

    onClick && onClick();
  };

  return (
    <button
      type={type}
      className={`button ${size} ${color} ${className}`}
      {...rest}
      onClick={clickEvent}
    >
      {children}
    </button>
  );
};

export default Button;

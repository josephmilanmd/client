import React, { useId } from 'react';

import './Input.scss';

type Props = {
  type?: string;
  value?: string;
  label?: string;
  className?: string;
  onChangeText?: (text: string) => void;
};

const Input = ({
  type = 'text',
  value,
  label,
  className = '',
  onChangeText,
  ...rest
}: Props & React.HTMLAttributes<HTMLInputElement>) => {
  const id = useId();
  return (
    <div className="input">
      {label && label !== '' && (
        <label className="input__label" htmlFor={'input-' + id}>
          {label}
        </label>
      )}
      <input
        id={'input-' + id}
        value={value}
        type={type}
        className={className}
        {...rest}
        onChange={(e) => onChangeText && onChangeText(e.target.value)}
      />
    </div>
  );
};

export default Input;

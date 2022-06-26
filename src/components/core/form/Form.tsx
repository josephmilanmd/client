import React from 'react';

type Props = {
  className?: string;
  onSubmit?: () => void;
  children: React.ReactNode;
};

const Form = ({
  className = '',
  onSubmit,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;

import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export default Button;

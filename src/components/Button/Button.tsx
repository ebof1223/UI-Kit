import React from 'react';

import { Props, ButtonStyles } from './';

/**This is the main button for the application */
const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <ButtonStyles variant={variant} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;

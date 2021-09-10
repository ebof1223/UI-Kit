import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export { default } from './Button';

export const ButtonStyles = styled.button<Props>`
  background: ${({ variant }) => (variant === 'primary' ? 'blue' : 'red')};
  padding: 1rem;
  color: #ccc;
  border-radius: 50px;
  border: none;
`;

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**Provides button's inner text */
  children: ReactNode;

  /** Button variants*/
  variant: 'primary' | 'secondary';
}

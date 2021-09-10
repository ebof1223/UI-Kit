import { Meta, Story } from '@storybook/react';
import Button, { Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
};
export default meta;

export const Primary: React.FC<Props> = () => (
  <Button variant="primary">Click Me</Button>
);

export const Secondary: React.FC<Props> = () => (
  <Button variant="secondary">Don't Click Me</Button>
);

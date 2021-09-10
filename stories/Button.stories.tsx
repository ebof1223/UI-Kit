import { Meta, Story } from '@storybook/react';
import Button, { Props } from '../src/components/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'default text',
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
};

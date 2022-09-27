import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppBar from '../components/AppBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AppBar',
  component: AppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'AppBar',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'AppBar',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'AppBar',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'AppBar',
};

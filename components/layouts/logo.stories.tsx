import Logo from '@components/layouts/logo'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
export default {
  title: 'Layouts/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Logo>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'SHOP',
  path: '/',
}

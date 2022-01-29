import Error from '@components/error/error'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Error',
  component: Error,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Error>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />

export const Error404 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error404.args = {
  errorCode: 404,
}

export const Error500 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error500.args = {
  errorCode: 500,
}

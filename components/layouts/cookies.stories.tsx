import Cookies, {
  horizontalType,
  verticalType,
} from '@components/layouts/cookies'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/Cookies',
  component: Cookies,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    vertical: {
      options: Object.values(verticalType),
      control: { type: 'select' },
    },
    horizontal: {
      options: Object.values(horizontalType),
      control: { type: 'select' },
    },
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof Cookies>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cookies> = (args) => <Cookies {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  vertical: verticalType.bottom,
  horizontal: horizontalType.center,
  visible: true,
}

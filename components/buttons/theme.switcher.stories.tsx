import ThemeSwither from '@components/buttons/theme.switcher'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/ThemeSwither',
  component: ThemeSwither,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    mode: { control: { type: 'select', options: ['light', 'dark'] } },
    onClick: { action: 'onClick (theme toggle)' },
  },
} as ComponentMeta<typeof ThemeSwither>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwither> = (args) => (
  <ThemeSwither {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  mode: 'dark',
}

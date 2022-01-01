import MainBlock from '@components/layouts/main-block'
import { Paper } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/MainBlock',
  component: MainBlock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {control: { type: 'color' }},
    onWishlistChange: { action: 'onWishlistChange' },
  },
} as ComponentMeta<typeof MainBlock>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainBlock> = (args) => (
  <MainBlock {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  leftBlock: <Paper>Left block</Paper>,
  rightBlock: <Paper>Right block</Paper>,

}

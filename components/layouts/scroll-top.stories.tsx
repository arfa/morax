import ScrollTop from '@components/layouts/scroll-top'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Box } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/ScrollTop',
  component: ScrollTop,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ScrollTop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScrollTop> = (args) => (
  <>
    <Box id="top" sx={{ height: '100vh', my: 5 }}></Box> <ScrollTop {...args} />
  </>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { anchorTop: '#top' }

import ScrollTop from '@components/layouts/scroll-top'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

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
    {' '}
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
          Scroll to see button
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar id="top" />
    <Box sx={{ height: '100vh', my: 5 }}></Box> <ScrollTop {...args} />
  </>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { anchorTop: '#top' }

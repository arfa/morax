import Slider from '@components/slider/slider'
import { Paper } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/Slider',
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Slider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    {[...Array(5)].map((_, i) => (
      <Paper
        key={i}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '50px',
          color: '#fff',
          fontWeight: '500',
          height: '300px',
          maxHeight: '100vh',
          background:
            'linear-gradient(128deg, rgba(255, 64, 156, 1) 0%, rgba(255, 63, 63, 1) 100%)',
        }}
      >
        {i + 1}
      </Paper>
    ))}
  </Slider>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  perView: 1,
  spacing: 10,
}

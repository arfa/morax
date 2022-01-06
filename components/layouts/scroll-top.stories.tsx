import ScrollTop from '@components/layouts/scroll-top'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/ScrollTop',
  component: ScrollTop,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ScrollTop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScrollTop> = (args) => {
  const wrapperEl = useRef()
  const [target, setTarget] = useState()

  useEffect(() => {
    setTarget(wrapperEl.current)
  }, [wrapperEl])

  return (
    <>
      <Box
        ref={wrapperEl}
        sx={{
          width: 300,
          height: 500,
          overflow: 'scroll',
          padding: '24px',
          backgroundColor: 'secondary.light',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              height: 100,
              margin: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'primary.light',
            }}
          >
            scroll down ↓
          </Box>
        ))}
        <ScrollTop target={target} {...args} />
      </Box>
    </>
  )
}

export const Local = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Local.args = {
  bottom: 16,
  right: 16,
  left: NaN,
}

const Template2: ComponentStory<typeof ScrollTop> = (args) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          sx={{
            height: 100,
            margin: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.light',
          }}
        >
          scroll down ↓
        </Box>
      ))}
      <ScrollTop {...args} />
    </>
  )
}
export const Global = Template2.bind({})
Global.args = {}

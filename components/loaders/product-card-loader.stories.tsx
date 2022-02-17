import ProductCardLoader from '@components/loaders/product-card-loader'
import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Loaders/ProductCardLoader',
  component: ProductCardLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductCardLoader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCardLoader> = (args) => (
  <Box
    sx={{
      width: 300,
      padding: '24px',
      backgroundColor: 'primary.dark',
    }}
  >
    <ProductCardLoader />
  </Box>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

import ProductSearchCard from '@components/product/product-search-card'
import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/ProductSearchCard',
  component: ProductSearchCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductSearchCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductSearchCard> = (args) => (
  <Box
    sx={{
      width: 300,
      padding: '24px',
      backgroundColor: 'primary.light',
    }}
  >
    <ProductSearchCard {...args} />
  </Box>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  imageUrl:
    'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
  imageAlt: 'T-shirt',
  name: 'T-shirt',
  price: '$25.00',
}

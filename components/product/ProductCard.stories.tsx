import ProductCard from '@components/product/product-card'
import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/ProductCard',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
  <Box
    sx={{
      width: 300,
      padding: '24px',
      backgroundColor: 'primary.dark',
    }}
  >
    <ProductCard {...args} />
  </Box>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image:
    'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
  price: '25 USD',
  name: 'T-shirt',
  slug: 'tshirt',
  wishlistEnabled: true,
}

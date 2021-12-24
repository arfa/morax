import CartItem from '@components/cart/cart-item'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cart/cart-item',
  component: CartItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onIncrease: { action: 'increased' },
    onDecrease: { action: 'decreased' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof CartItem>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartItem> = (args) => (
  <CartItem {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const data = {
  itemName: 'Lightweight Jacket',
  imageUrl:
    'https://cdn11.bigcommerce.com/s-lu4684lw7b/images/stencil/original/products/112/376/image_url_https%253A%252F%252Fcdn11.bigcommerce.com%252Fs-qfzerv205w%252Fimages%252Fstencil%252Foriginal%252Fproducts%252F116%252F512%252FMen-Jacket-Front-Black__15466.1603283963__94945.1640001047.png',
  imageAlt: 'product',
  itemPath: 'sdfsfsf',
}
const cartSubtitle = {
  price: '25$',
  options: [
    { name: 'Size', value: 'M' },
    { name: 'Color', value: '#d3a3a3' },
  ],
}
const cartQuantity = {
  step: 1,
  max: 100,
  value: 1,
}
Default.args = {
  ...data,
  cartSubtitle,
  cartQuantity,
}

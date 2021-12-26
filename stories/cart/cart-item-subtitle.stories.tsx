import CartItemSubtitle from '@components/cart/cart-item-subtitle'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cart/cart-item-subtitle',
  component: CartItemSubtitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CartItemSubtitle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartItemSubtitle> = (args) => (
  <CartItemSubtitle {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  price: '25$',
  options: [
    { name: 'Size', value: 'M' },
    { name: 'Color', value: '#d3a3a3' },
  ],
}

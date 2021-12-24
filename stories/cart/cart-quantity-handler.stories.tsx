import CartQuantityHandler from '@components/cart/cart-quantity-handler'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cart/cart-quantity-handler',
  component: CartQuantityHandler,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onIncrease: { action: 'increased' },
    onDecrease: { action: 'decreased' },
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof CartQuantityHandler>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartQuantityHandler> = (args) => (
  <CartQuantityHandler {...args} />
)

export const Default = Template.bind({})
Default.args = {
  step: 1,
  max: 100,
  value: 1,
}

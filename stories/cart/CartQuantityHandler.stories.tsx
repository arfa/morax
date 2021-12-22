import CartQuantityHandler from '@components/cart/CartQuantityHandler'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cart/CartQuantityHandler',
  component: CartQuantityHandler,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CartQuantityHandler>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartQuantityHandler> = () => {
  const [quantity, setQuantity] = useState<number>(1)
  return (
    <CartQuantityHandler
      max={10}
      value={quantity}
      handleIncrease={() => setQuantity(quantity + 1)}
      handleDecrease={() => setQuantity(quantity - 1)}
      handleRemove={() => {}}
    />
  )
}

export const Default = Template.bind({})

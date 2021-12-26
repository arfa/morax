import WishlistButton from '@components/product/WishlistButton'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/WishlistButton',
  component: WishlistButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {control: { type: 'color' }},
    onWishlistChange: { action: 'onWishlistChange' },
  },
} as ComponentMeta<typeof WishlistButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WishlistButton> = (args) => (
  <WishlistButton {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

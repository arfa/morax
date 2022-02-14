import Social from '@components/product/social'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/Social',
  component: Social,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Social>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Social> = (args) => <Social {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  url: 'https://commerce-mui-nszqyx3rc-wassim-arfa.vercel.app/product/orbit-terrarium-small',
  image: 'https://source.unsplash.com/random?clothes,accesories',
}

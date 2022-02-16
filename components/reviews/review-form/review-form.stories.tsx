import ReviewForm from '@components/reviews/review-form/review-form'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/ReviewForm',
  component: ReviewForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
} as ComponentMeta<typeof ReviewForm>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReviewForm> = (args) => (
  <ReviewForm {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  image: 'https://source.unsplash.com/random',
  title: 'Product Name',
  rate: 3,
}

import Review from '@components/reviews/review'
import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Rate } from './review'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/Review',
  component: Review,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ratingValue: {
      options: Object.values(Rate),
      control: { type: 'inline-radio' }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof Review>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Review> = (args) => (
  <Box
    sx={{
      width: '500px',
      padding: '24px',
      boxShadow: 1,
    }}
  >
    <Review {...args} />
  </Box>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  imageAlt: 'Betsy Braddock',
  title: 'Betsy Braddock',
  subtitle: 'July 16, 2021',
  ratingValue: Rate.THREE,
  body: 'Et laboris adipisicing voluptate ipsum aliqua sit cillum labore tempor. Laboris aliquip eiusmod eu do. Duis eu sint ipsum elit laboris sint nulla ipsum magna eu anim officia pariatur. Do reprehenderit ut pariatur et reprehenderit cupidatat ea incididunt quis excepteur ex voluptate. Do laboris aliquip sit officia incididunt commodo labore ea cupidatat cillum ut elit reprehenderit labore. Excepteur deserunt exercitation eu est.',
}

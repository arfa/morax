import SearchButton from '@components/buttons/search-button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

const options = [
  {
    id: '1',
    name: 'Product 1',
  },
  {
    id: '2',
    name: 'Product 2',
  },
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/SearchButton',
  component: SearchButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onInputChange: { action: 'onInputChange' },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof SearchButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchButton> = (args) => (
  <SearchButton {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  options
}

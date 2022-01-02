import Searchbar from '@components/inputs/searchbar'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/Searchbar',
  component: Searchbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onSearch: { action: 'onSearch' },
  },
} as ComponentMeta<typeof Searchbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Searchbar> = (args) => (
  <Searchbar {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: 'Search',
}

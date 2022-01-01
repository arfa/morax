import CategoryList from '@components/category/category-list'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Menu/CategoryList',
  component: CategoryList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CategoryList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CategoryList> = (args) => (
  <CategoryList {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  data: [
    {
      id: '1',
      name: 'Category 1',
      slug: 'category-1',
      image: { url: 'https://via.placeholder.com/150' },
      path: 'category-1',
    },
    {
      id: '2',
      name: 'Category 2',
      slug: 'category-2',
      image: { url: 'https://via.placeholder.com/150' },
      path: 'category-2',
    },
    {
      id: '3',
      name: 'Category 3',
      slug: 'category-3',
      image: { url: 'https://via.placeholder.com/150' },
      path: 'category-3',
    },
    {
      id: '4',
      name: 'Category 4',
      slug: 'category-4',
      image: { url: 'https://via.placeholder.com/150' },
      path: 'category-4',
    },
  ],
}

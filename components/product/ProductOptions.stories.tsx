import ProductOptions from '@components/product/ProductOptions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/ProductOptions',
  component: ProductOptions,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // TODO:
    setSelectedOptions: { action: 'setSelectedOptions' },
  },
} as ComponentMeta<typeof ProductOptions>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductOptions> = (args) => (
  <ProductOptions {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  options: [
    {
      id: '114',
      displayName: 'Size',
      values: [
        {
          label: 'S',
        },
        {
          label: 'M',
        },
        {
          label: 'L',
        },
      ],
    },
    {
      id: '113',

      displayName: 'Color',
      values: [
        {
          label: '#d3a3a3',
          hexColors: ['#D3A3A3'],
        },
        {
          label: '#a9b0b3',
          hexColors: ['#A9B0B3'],
        },
        {
          label: '#d499f0',
          hexColors: ['#D499F0'],
        },
      ],
    },
  ],
  selectedOptions: {
    size: 's',
    color: '#d3a3a3',
  },
}

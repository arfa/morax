import ProductSidebar from '@components/product/ProductSideBar'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product/ProductSidebar',
  component: ProductSidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // TODO:
    setSelectedOptions: { action: 'setSelectedOptions' },
    onAddToCart: { action: 'onAddToCart' },
  },
} as ComponentMeta<typeof ProductSidebar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductSidebar> = (args) => (
  <ProductSidebar {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  product: {
    name: 'Lightweight Jacket',
    description: '',
    prices: {
      price: {
        value: 35,
        currencyCode: 'USD',
      },
      salePrice: null,
      retailPrice: null,
    },
    images: [
      {
        url: 'https://cdn11.bigcommerce.com/s-lu4684lw7b/images/stencil/original/products/112/376/image_url_https%253A%252F%252Fcdn11.bigcommerce.com%252Fs-qfzerv205w%252Fimages%252Fstencil%252Foriginal%252Fproducts%252F116%252F512%252FMen-Jacket-Front-Black__15466.1603283963__94945.1640001047.png',
        alt: '',
      },
    ],
    id: '112',
    options: [
      {
        id: '114',
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
        __typename: 'MultipleChoiceOption',
        displayName: 'Size',
      },
      {
        id: '113',
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
        __typename: 'MultipleChoiceOption',
        displayName: 'Color',
      },
    ],
    slug: 'lightweight-jacket',
    price: {
      value: 35,
      currencyCode: 'USD',
    },
  },
  selectedOptions: {
    size: 's',
    color: '#d3a3a3',
  },
}

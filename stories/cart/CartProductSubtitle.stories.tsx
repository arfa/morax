import CartProductSubtitle from '@components/cart/CartProductSubtitle'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cart/CartProductSubtitle',
  component: CartProductSubtitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CartProductSubtitle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartProductSubtitle> = (args) => (
  <CartProductSubtitle {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  item: {
    id: '5621c650-874d-4fe8-8c30-efba97a16a9e',
    variantId: '82',
    productId: '112',
    name: 'Lightweight Jacket',
    quantity: 1,
    variant: {
      id: '82',
      sku: '112-D3-M',
      name: 'Lightweight Jacket',
      image: {
        url: 'https://cdn11.bigcommerce.com/s-lu4684lw7b/products/112/images/376/image_url_https%25253A%25252F%25252Fcdn11.bigcommerce.com%25252Fs-qfzerv205w%25252Fimages%25252Fstencil%25252Foriginal%25252Fproducts%25252F116%25252F512%25252FMen-Jacket-Front-Black__15466.1603283963__94945.1640001047.220.290.png?c=1',
      },
      requiresShipping: true,
      price: 35,
      listPrice: 35,
    },
    options: [
      { name: 'Size', value: 'M' },
      { name: 'Color', value: '#d3a3a3' },
    ],
    path: 'lightweight-jacket',
    discounts: [],
  },
  currencyCode: 'USD',
}

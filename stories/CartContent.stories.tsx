import CartContent from '@components/cart/cart-content'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cart/CartContent',
  component: CartContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CartContent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartContent> = (args) => (
  <CartContent {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  data: {
    id: '9a8b0cae-a78a-42d5-8e22-a82afa35e368',
    customerId: '0',
    email: '',
    createdAt: '2021-12-22T10:04:31+00:00',
    currency: {
      code: 'USD',
    },
    lineItems: [
      {
        id: '2cc69799-b9ff-400e-b63e-7b460ba9f225',
        variantId: '89',
        productId: '112',
        name: 'Lightweight Jacket',
        quantity: 2,
        variant: {
          id: '89',
          sku: '112-D4-L',
          name: 'Lightweight Jacket',
          image: {
            url: 'https://cdn11.bigcommerce.com/s-lu4684lw7b/products/112/images/376/image_url_https%25253A%25252F%25252Fcdn11.bigcommerce.com%25252Fs-qfzerv205w%25252Fimages%25252Fstencil%25252Foriginal%25252Fproducts%25252F116%25252F512%25252FMen-Jacket-Front-Black__15466.1603283963__94945.1640001047.220.290.png?c=1',
          },
          requiresShipping: true,
          price: 35,
          listPrice: 35,
        },
        options: [
          {
            name: 'Size',
            nameId: 114,
            value: 'L',
            valueId: 117,
          },
          {
            name: 'Color',
            nameId: 113,
            value: '#d499f0',
            valueId: 114,
          },
        ],
        path: 'lightweight-jacket',
        discounts: [],
      },
    ],
    lineItemsSubtotalPrice: 70,
    subtotalPrice: 70,
    totalPrice: 70,
  },
  isLoading: false,
  isEmpty: false,
}

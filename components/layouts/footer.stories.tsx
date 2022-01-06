import Footer from '@components/layouts/footer'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layouts/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Footer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  socials: [
    {
      icon: <FiFacebook />,
      name: 'facebook',
      link: 'https://www.facebook.com',
    },
    {
      icon: <FiInstagram />,
      name: 'Instagram',
      link: 'https://www.instagram.com',
    },
    {
      icon: <FiGithub />,
      name: 'Github',
      link: 'https://github.com',
    },
  ],
  copyright: '\u00a9 2020 Transcend, Inc. All rights reserved.',
}

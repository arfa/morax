import { ThemeProvider } from '@mui/material/styles'
import { useDarkMode } from 'storybook-dark-mode'
import * as NextImage from 'next/image'
import {
  THEME_DARK,
  THEME_LIGHT,
} from '../styles/constants/constants.theme.base.ts'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? THEME_DARK : THEME_LIGHT}>
      <Story />
    </ThemeProvider>
  ),
]

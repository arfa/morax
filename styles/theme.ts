import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#5b5b5b',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple!
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 20,
          boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
        },
      },
    },
  },
})

export default theme

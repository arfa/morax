import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const defaultTheme = createTheme()
const theme = createTheme(defaultTheme, {
  palette: {
    primary: {
      main: '#db7093',
    },
    secondary: {
      main: '#994e77',
    },
    warning: {
      main: '#ffe0f1',
    },
    error: {
      main: red.A200,
    },
    info: {
      main: '#ffc1e2',
    },
  },
  shape: {
    borderRadius: 8,
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
          color: 'rgb(43, 52, 69)',
          boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          margin: 'auto',
          overflow: 'hidden',
          transition: 'all 250ms ease-in-out 0s',
          '&:hover': { boxShadow: '0 6px 12px rgba(0,0,0,.08)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {},
      },
    },
    MuiGrid: {
      styleOverrides: {
        // Name of the slot
        root: {
          padding: defaultTheme.spacing(3),
          border: 'solid',
          borderWidth: '1px',
          borderColor: '#e6e6e6',
          borderRadius: '0.5rem',
          boxShadow: 'none',
        },
      },
    },
  },

  shadows: ['none', 'rgb(0, 0, 0, 0.08) 0px 2px 3px 0px'],
})

export default theme

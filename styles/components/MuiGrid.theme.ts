import { DEFAULT_THEME } from 'styles/constants.theme'

export const MuiGrid = {
  styleOverrides: {
    // Name of the slot
    root: {
      padding: DEFAULT_THEME.spacing(3),
      border: 'solid',
      borderWidth: '1px',
      borderColor: '#e6e6e6',
      borderRadius: '0.5rem',
      boxShadow: 'none',
    },
  },
}

import { THEME_DEFAULT } from '../constants/constants.theme.default'

export const MuiGrid = {
  styleOverrides: {
    // Name of the slot
    root: {
      padding: THEME_DEFAULT.spacing(3),
      border: 'solid',
      borderWidth: '1px',
      borderColor: '#e6e6e6',
      borderRadius: '0.5rem',
      boxShadow: 'none',
    },
  },
}

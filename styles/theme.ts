import { createTheme } from '@mui/material/styles'
import { MuiButtonBase } from './components/MuiButtonBase.theme'
import { MuiCard } from './components/MuiCard.theme'
import { MuiGrid } from './components/MuiGrid.theme'
import { MuiInputBase } from './components/MuiInputBase.theme'
import { DEFAULT_THEME } from './constants.theme'
import { palette } from './palette.theme'
import { shadows } from './shadows.theme'
import { shape } from './shape.theme'

// Create a theme instance.
let theme = createTheme(DEFAULT_THEME, {
  palette,
  shape,
  shadows,
  components: {
    MuiButtonBase,
    MuiInputBase,
    MuiCard,
    MuiGrid,
  },
})

export default theme

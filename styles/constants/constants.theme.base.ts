import { createTheme } from '@mui/material/styles'
import { MuiButton } from 'styles/components/MuiButton.theme'
import { MuiButtonBase } from 'styles/components/MuiButtonBase.theme'
import { MuiCard } from 'styles/components/MuiCard.theme'
import { MuiGrid } from 'styles/components/MuiGrid.theme'
import { MuiInputBase } from 'styles/components/MuiInputBase.theme'
import { palette as darkPalette } from 'styles/palette.dark.theme'
import { palette as lightPalette } from 'styles/palette.light.theme'
import { shadows } from 'styles/shadows.theme'
import { shape } from 'styles/shape.theme'
import { common } from '../palette.common.theme'
import { MuiTypography } from './../components/MuiTypography.theme'
import { THEME_DEFAULT } from './constants.theme.default'

export const THEME_BASE = createTheme(THEME_DEFAULT, {
  shape,
  shadows,
  components: {
    MuiButton,
    MuiButtonBase,
    MuiInputBase,
    MuiCard,
    MuiGrid,
    MuiTypography,
  },
})
export const THEME_LIGHT = createTheme(THEME_BASE, {
  palette: {
    mode: 'light',
    ...common,
    ...lightPalette,
  },
})

export const THEME_DARK = createTheme(THEME_BASE, {
  palette: {
    mode: 'dark',
    ...common,
    ...darkPalette,
  },
})

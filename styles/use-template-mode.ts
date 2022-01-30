import { useState, useMemo, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/system'
import { PaletteMode } from '@mui/material'
import { THEME_DARK, THEME_LIGHT } from './constants/constants.theme.base'

const useThemeMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useState<PaletteMode>()

  useEffect(() => {
    setDarkMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  const _theme: Theme = useMemo(
    () => (darkMode === 'dark' ? THEME_DARK : THEME_LIGHT),
    [darkMode]
  )

  return { theme: _theme, setDarkMode }
}

export default useThemeMode

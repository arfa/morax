import { createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/system'
import { useMemo, useState } from 'react'

const useThemeMode = (theme: Theme) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  )

  const _theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return { theme: _theme, setMode, mode }
}

export default useThemeMode

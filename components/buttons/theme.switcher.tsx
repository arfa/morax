import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

type Props = {
  mode?: 'light' | 'dark'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ThemeSwither = ({ mode, onClick }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={onClick} color="inherit">
        {mode === 'dark' ? <MdBrightness7 /> : <MdBrightness4 />}
      </IconButton>
    </Box>
  )
}

export default ThemeSwither

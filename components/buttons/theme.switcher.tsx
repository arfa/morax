import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { BsSun } from 'react-icons/Bs'
import { BiMoon } from 'react-icons/Bi'

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
        color: 'divider',
        borderRadius: 1,
        ml: 0,
      }}
    >
      <IconButton onClick={onClick}>
        {mode === 'dark' ? <BsSun /> : <BiMoon />}
      </IconButton>
    </Box>
  )
}

export default ThemeSwither

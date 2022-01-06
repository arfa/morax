import { Button, Snackbar } from '@mui/material'
import * as React from 'react'
export enum verticalType {
  top = 'top',
  bottom = 'bottom',
}
export enum horizontalType {
  left = 'left',
  center = 'center',
  right = 'right',
}

export const DEFAULT_MSG =
  'This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.'
export const DEFAULT_BTN_LABEL = 'Accept cookies'
export interface CookiesProps {
  vertical?: verticalType
  horizontal?: horizontalType
  visible: boolean
  msg?: string
  buttonLabel?: string
  onClick?: (e: any) => void
}
export default function Cookies({
  vertical = verticalType.bottom,
  horizontal = horizontalType.center,
  visible = true,
  msg = DEFAULT_MSG,
  buttonLabel = DEFAULT_BTN_LABEL,
  onClick,
}: CookiesProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={visible}
      onClose={onClick}
      message={msg}
      key={vertical + horizontal}
      action={
        <Button
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: 'inhirit',
            color: 'primary',
            borderColor: 'primary',
            '&:hover': { color: 'primary' },
          }}
          onClick={onClick}
        >
          {buttonLabel}
        </Button>
      }
    />
  )
}

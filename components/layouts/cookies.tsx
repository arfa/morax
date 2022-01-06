import { Button, Snackbar } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
export enum verticalType {
  top = 'top',
  bottom = 'bottom',
}
export enum horizontalType {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface CookiesProps {
  vertical?: verticalType
  horizontal?: horizontalType
  visible: boolean
  onClick?: (e: any) => void
}
export default function Cookies({
  vertical = verticalType.bottom,
  horizontal = horizontalType.center,
  visible = true,
  onClick,
}: CookiesProps) {
  const [state, setState] = React.useState({
    open: visible,
    v: vertical,
    h: horizontal,
  })
  useEffect(() => {
    // Update the document title using the browser API
    setState({
      open: visible,
      v: vertical,
      h: horizontal,
    })
  }, [visible, vertical, horizontal])
  const { v, h, open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: v, horizontal: h }}
        open={open}
        onClose={handleClose}
        message="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        key={v + h}
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
            Accept cookies
          </Button>
        }
      />
    </div>
  )
}

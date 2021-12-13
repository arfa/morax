import { IconButton, SwipeableDrawer, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
type Anchor = 'top' | 'left' | 'bottom' | 'right'
export default function Cart() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 400, padding: 3 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Products Here */}
      <Typography variant="h5" paddingBottom="40px">
        Shopping cart
      </Typography>
    </Box>
  )

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          aria-label="cart"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer('right', true)}
          color="inherit"
        >
          <HiOutlineShoppingCart />
        </IconButton>
        {/* <Button onClick={toggleDrawer('right', true)}>Right</Button> */}
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}

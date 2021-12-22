import useCart from '@framework/cart/use-cart'
import { IconButton, SwipeableDrawer } from '@mui/material'
import * as React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import CartContent from './cart-content'
type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function Cart() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  // logic
  const { data, isLoading, isEmpty } = useCart()

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
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          <CartContent data={data} isLoading={isLoading} isEmpty={isEmpty} />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}

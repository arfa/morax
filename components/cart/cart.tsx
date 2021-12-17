import useCart from '@framework/cart/use-cart'
import usePrice from '@framework/product/use-price'
import { Button, IconButton, SwipeableDrawer, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import CartItem from './CartItem'
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

  const { price: subTotal } = usePrice(
    data && {
      amount: Number(data.subtotalPrice),
      currencyCode: data.currency.code,
    }
  )
  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )

  const error = null
  const success = null
  /////////
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
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Products Here */}
      {isLoading || isEmpty ? (
        <p>Your cart is empty</p>
      ) : error ? (
        <p>
          We couldn’t process the purchase. Please check your card information
          and try again.
        </p>
      ) : success ? (
        <p> Thank you for your order.</p>
      ) : (
        <>
          <Typography variant="h5" paddingBottom="40px">
            Shopping cart
          </Typography>
          {data!.lineItems.map((item: any) => (
            <CartItem
              key={item.id}
              item={item}
              currencyCode={data!.currency.code}
            />
          ))}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              bgcolor: 'background.paper',
              paddingTop: '20px',
            }}
          >
            <span>Total</span>
            <span>{total}</span>
          </Box>
          <div>
            <Button
              sx={{ marginY: '20px', width: '100%' }}
              variant="contained"
              href="/checkout"
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
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

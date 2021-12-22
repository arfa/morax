import { Cart } from '@commerce/types/cart'
import usePrice from '@framework/product/use-price'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import CartItem from './CartItem'

interface Props {
  data: Cart
  isLoading: boolean
  isEmpty: boolean
}

export default function CartContent({ data, isLoading, isEmpty }: Props) {
  const { price: total } = usePrice(
    data && {
      amount: Number(data.totalPrice),
      currencyCode: data.currency.code,
    }
  )

  const error = null
  const success = null

  return (
    <Box sx={{ width: 400, padding: 3 }} role="presentation">
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
}

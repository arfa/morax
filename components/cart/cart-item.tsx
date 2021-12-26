import CartItemSubtitle from '@components/cart/cart-item-subtitle'
import { Avatar, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { CartItemSubtitleProps } from './cart-item-subtitle'
import CartQuantityHandler, {
  CartQuantityHandlerProps,
} from './cart-quantity-handler'

interface CartItemProps {
  imageUrl: string | undefined
  imageAlt: string | undefined
  itemPath: string
  itemName: string
  cartSubtitle: CartItemSubtitleProps
  cartQuantity: CartQuantityHandlerProps
}
const CartItem = ({
  imageUrl,
  imageAlt,
  itemPath,
  itemName,
  cartSubtitle,
  cartQuantity,
}: CartItemProps) => {
  return (
    <Stack direction="row">
      <Link href={`/product/${itemPath}`} passHref>
        <Avatar
          alt={imageAlt}
          src={imageUrl}
          sx={{
            width: '76px',
            height: '76px',
            marginX: '16px',
          }}
          variant="square"
        />
      </Link>
      <Box>
        <Link href={`/product/${itemPath}`} passHref>
          <Typography
            variant="h5"
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '1.5',
              textTransform: 'none',
              whiteSpace: 'normal',
            }}
          >
            {itemName}
          </Typography>
        </Link>
        <CartItemSubtitle
          price={cartSubtitle.price}
          options={cartSubtitle.options}
        />
        <CartQuantityHandler
          value={cartQuantity.value}
          max={cartQuantity.max}
          step={cartQuantity.step}
          onChange={cartQuantity.onChange}
          onDecrease={cartQuantity.onDecrease}
          onIncrease={cartQuantity.onIncrease}
          onRemove={cartQuantity.onRemove}
        />
      </Box>
    </Stack>
  )
}

export default CartItem

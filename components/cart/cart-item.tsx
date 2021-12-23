import CartItemSubtitle from '@components/cart/cart-item-subtitle'
import { Avatar, Typography } from '@mui/material'
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
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px 20px',
          borderBottom: '1px solid rgb(243, 245, 249)',
        }}
      >
        <Link href={`/product/${itemPath}`}>
          <a>
            <Avatar
              alt={imageAlt}
              src={imageUrl}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1.25rem',
                lineHeight: 1,
                borderRadius: '20%',
                overflow: 'hidden',
                userSelect: 'none',
                marginLeft: '16px',
                marginRight: '16px',
                height: '76px',
                width: '76px',
              }}
              variant="square"
            />
          </a>
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
            handleRemove={cartQuantity.handleRemove}
            handleIncrease={cartQuantity.handleIncrease}
            handleDecrease={cartQuantity.handleDecrease}
          />
        </Box>
      </Box>
    </>
  )
}

export default CartItem

import type { LineItem } from '@commerce/types/cart'
import CartProductSubtitle from '@components/cart/CartProductSubtitle'
import useRemoveItem from '@framework/cart/use-remove-item'
import useUpdateItem from '@framework/cart/use-update-item'
import { Avatar, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import CartQuantityHandler from './CartQuantityHandler'

const CartItem = ({
  item,
  currencyCode,
}: {
  item: LineItem
  currencyCode: string
}) => {
  const [removing, setRemoving] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem({ item })

  const increaseQuantity = async (n = 1) => {
    const val = Number(quantity) + n
    setQuantity(val)
    await updateItem({ quantity: val })
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item)
    } catch (error) {
      setRemoving(false)
    }
  }

  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (item.quantity !== Number(quantity)) {
      setQuantity(item.quantity)
    }
    // TODO: currently not including quantity in deps is intended, but we should
    // do this differently as it could break easily
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.quantity])

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
        <Link href={`/product/${item.path}`}>
          <a>
            <Avatar
              alt={item.variant.image!.altText}
              src={item.variant.image!.url}
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
          <Link href={`/product/${item.path}`} passHref>
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
              {item.name}
            </Typography>
          </Link>
          <CartProductSubtitle item={item} currencyCode={currencyCode} />
          <CartQuantityHandler
            value={quantity}
            handleRemove={handleRemove}
            handleIncrease={() => increaseQuantity(1)}
            handleDecrease={() => increaseQuantity(-1)}
          />
        </Box>
      </Box>
    </>
  )
}

export default CartItem

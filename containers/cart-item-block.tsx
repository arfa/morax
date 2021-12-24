import type { LineItem } from '@commerce/types/cart'
import CartItem from '@components/cart/cart-item'
import useRemoveItem from '@framework/cart/use-remove-item'
import useUpdateItem from '@framework/cart/use-update-item'
import usePrice from '@framework/product/use-price'
import { useState } from 'react'

const CartItemBlock = ({
  item,
  currencyCode,
}: {
  item: LineItem
  currencyCode: string
}) => {
  const [removing, setRemoving] = useState(false)
  const removeItem = useRemoveItem()
  const updateItem = useUpdateItem({ item })

  const onChangeQuantity = async (quantity: number) => {
    await updateItem({ quantity })
  }

  const handleRemove = async () => {
    setRemoving(true)
    try {
      await removeItem(item)
    } catch (error) {
      setRemoving(false)
    }
  }

  const { price } = usePrice({
    amount: item.variant.price * item.quantity,
    baseAmount: item.variant.listPrice * item.quantity,
    currencyCode,
  })
  const options = (item as any).options
  const cartSubtitle = { price: price, options }
  const cartQuantity = {
    value: item.quantity,
    onChange: onChangeQuantity,
    onRemove: handleRemove,
  }

  return (
    <CartItem
      itemName={item.name}
      imageUrl={item.variant.image!.url}
      imageAlt={item.variant.image!.altText}
      itemPath={item.path}
      cartSubtitle={cartSubtitle}
      cartQuantity={cartQuantity}
    />
  )
}

export default CartItemBlock

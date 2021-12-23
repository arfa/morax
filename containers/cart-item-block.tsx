import type { LineItem } from '@commerce/types/cart'
import CartItem from '@components/cart/cart-item'
import useRemoveItem from '@framework/cart/use-remove-item'
import useUpdateItem from '@framework/cart/use-update-item'
import usePrice from '@framework/product/use-price'
import { useEffect, useState } from 'react'

const CartItemBlock = ({
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

  const { price } = usePrice({
    amount: item.variant.price * item.quantity,
    baseAmount: item.variant.listPrice * item.quantity,
    currencyCode,
  })
  const options = (item as any).options
  const cartSubtitle = { price: price, options }
  const cartQuantity = {
    value: quantity,
    handleIncrease: () => increaseQuantity(1),
    handleDecrease: () => increaseQuantity(-1),
    handleRemove: () => handleRemove(),
    max: 100,
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

import type { Product, ProductVariant } from '@commerce/types/product'
import useCustomer from '@framework/customer/use-customer'
import useAddItem from '@framework/wishlist/use-add-item'
import useRemoveItem from '@framework/wishlist/use-remove-item'
import useWishlist from '@framework/wishlist/use-wishlist'
import Router from 'next/router'
import React, { FC, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

type Props = {
  productId: Product['id']
  variant: ProductVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const WishlistButton: FC<Props> = ({ productId, variant }) => {
  const { data } = useWishlist()
  const addItem = useAddItem()
  const removeItem = useRemoveItem()
  const { data: customer } = useCustomer()
  const [loading, setLoading] = useState(false)

  // @ts-ignore Wishlist is not always enabled
  const itemInWishlist = data?.items?.find(
    // @ts-ignore Wishlist is not always enabled
    (item) =>
      item.product_id === Number(productId) &&
      (item.variant_id as any) === Number(variant.id)
  )

  const handleWishlistChange = async (e: any) => {
    e.preventDefault()

    if (loading) return

    // A login is required before adding an item to the wishlist
    if (!customer) {
      Router.push('/ogin')
    }

    setLoading(true)

    try {
      if (itemInWishlist) {
        await removeItem({ id: itemInWishlist.id! })
      } else {
        await addItem({
          productId,
          variantId: variant?.id!,
        })
      }

      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return itemInWishlist ? (
    <AiFillHeart onClick={handleWishlistChange} color="#DB7093" />
  ) : (
    <AiOutlineHeart onClick={handleWishlistChange} color="#DB7093" />
  )
}

export default WishlistButton

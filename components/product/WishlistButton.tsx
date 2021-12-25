import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

type Props = {
  itemInWishlist: boolean
  handleWishlistChange: (e: any) => Promise<void>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const WishlistButton: FC<Props> = ({
  itemInWishlist = false,
  handleWishlistChange,
}) => {
  return itemInWishlist ? (
    <AiFillHeart onClick={handleWishlistChange} color="#DB7093" />
  ) : (
    <AiOutlineHeart onClick={handleWishlistChange} color="#DB7093" />
  )
}

export default WishlistButton

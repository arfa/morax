import { IconButton } from '@mui/material'
import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

type Props = {
  active: boolean
  onWishlistChange: (e: any) => Promise<void>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const WishlistButton: FC<Props> = ({
  active = false,
  color = '#DB7093',
  onWishlistChange,
}) => {
  const Icon = active ? AiFillHeart : AiOutlineHeart
  const handleWishlistChange = (e: any) => {
    onWishlistChange(!active)
  }
  return (
    <IconButton
      onClick={handleWishlistChange}
      aria-label="wishlist"
      component="span"
    >
      <Icon color={color} />
    </IconButton>
  )
}

export default WishlistButton

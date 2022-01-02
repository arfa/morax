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
  const [status, setStatus] = React.useState(active)
  const Icon = status ? AiFillHeart : AiOutlineHeart
  const handleWishlistChange = (e: any) => {
    setStatus(!status)
    onWishlistChange(!status)
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

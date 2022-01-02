import WishlistButton from '@components/buttons/WishlistButton'
import { Card } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import MUILink from '@mui/material/Link'
import * as React from 'react'
interface Props {
  name: string
  slug?: string | undefined
  image?: string | undefined
  price: string
  itemInWishlist: boolean
  wishlistEnabled: boolean
  handleWishlistChange: (e: any) => Promise<void>
}

export default function ProductCard({
  price,
  image,
  name,
  slug,
  itemInWishlist,
  wishlistEnabled,
  handleWishlistChange,
}: Props) {
  return (
    <Card>
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={name || 'Product Image'}
        />
      )}
      <CardContent sx={{ padding: '16px' }}>
        <Link href={`/product/${slug}`} passHref>
          <MUILink color="inherit" underline="none">
            <Typography gutterBottom variant="subtitle1" fontWeight="medium" noWrap>
              {name}
            </Typography>
          </MUILink>
        </Link>
      </CardContent>
      <CardActions sx={{ padding: '0 24px 24px 24px' }}>
        <Typography
          variant="caption"
          fontWeight="medium"
          sx={{ marginRight: 'auto' }}
        >
          {price}
        </Typography>
        {wishlistEnabled && (
          <WishlistButton
            active={itemInWishlist}
            onWishlistChange={handleWishlistChange}
          />
        )}
      </CardActions>
    </Card>
  )
}

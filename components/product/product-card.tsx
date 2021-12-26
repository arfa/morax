import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import * as React from 'react'
import styles from './product-card.module.css'
import WishlistButton from './WishlistButton'
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
    <Card className={styles['card']}>
      {image && (
        <CardMedia
          component="img"
          className={styles['card-img']}
          image={image}
          alt={name || 'Product Image'}
        />
      )}
      <CardContent className={styles['card-content']}>
        <Link href={`/product/${slug}`} passHref>
          <Typography gutterBottom component="div" sx={{ fontWeight: '500' }}>
            {name}
          </Typography>
        </Link>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          padding: '24px',
          paddingTop: '0px',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '0.75rem', marginRight: 'auto', fontWeight: '500' }}
        >
          {price}
        </Typography>
        { wishlistEnabled && (
          <WishlistButton
            active={itemInWishlist}
            onWishlistChange={handleWishlistChange}
          />
        )}
      </CardActions>
    </Card>
  )
}

import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
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
  product: Product
}

const placeholderImg = '/product-img-placeholder.svg'

export default function ProductCard({ product }: Props) {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  return (
    <Card className={styles['card']}>
      {product?.images && (
        <CardMedia
          component="img"
          className={styles['card-img']}
          image={product.images[0]?.url || placeholderImg}
          alt={product.name || 'Product Image'}
        />
      )}

      <CardContent className={styles['card-content']}>
        <Link href={`/product/${product.slug}`} passHref>
          <Typography gutterBottom component="div" sx={{ fontWeight: '500' }}>
            {product.name}
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
        {process.env.COMMERCE_WISHLIST_ENABLED && (
          <WishlistButton
            productId={product.id}
            variant={product.variants[0] as any}
          />
        )}
      </CardActions>
    </Card>
  )
}

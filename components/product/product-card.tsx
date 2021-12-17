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
interface Props {
  className?: string
  product: Product
  noNameTag?: boolean
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
      <CardActions className={styles['card-footer']}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '0.75rem', marginRight: 'auto', fontWeight: '500' }}
        >
          {price}
        </Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles['card-add-cart']}
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </CardActions>
    </Card>
  )
}

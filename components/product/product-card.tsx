import { Product } from '@components/types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import styles from './product-card.module.css'
import usePrice from './use-price'
import Link from 'next/link'
interface ProductProps {
  product: Product
  className?: string
}
export default function ProductCard({ product, className }: ProductProps) {
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price,
    baseAmount: product.price,
    currencyCode: 'USD',
  })
  return (
    <Card className={styles['card']}>
      <CardMedia
        component="img"
        className={styles['card-img']}
        image={product.image}
        alt="green iguana"
      />

      <CardContent className={styles['card-content']}>
        <Link href={`/product/${product.id}`} passHref>
          <Typography gutterBottom component="div" sx={{ fontWeight: '500' }}>
            {product.name}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '0.75rem' }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className={styles['card-footer']}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: '0.75rem', marginRight: 'auto', fontWeight: '500' }}
        >
          {price}
          {discount && <del className={styles['card-price']}>{basePrice}</del>}
        </Typography>{' '}
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

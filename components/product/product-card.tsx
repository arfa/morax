import { Product } from '@components/types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import styles from './product-card.module.css'
import usePrice from './use-price'
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
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions className={styles['card-footer']}>
        <Typography variant="subtitle1">
          {price}
          {discount && <del className={styles['card-price']}>{basePrice}</del>}
        </Typography>{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles['card-add-cart']}
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
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

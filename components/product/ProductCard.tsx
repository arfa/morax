import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import styles from './ProductCard.module.css'
export default function ProductCard() {
  return (
    <Card
      className={styles['card']}
    >
      <div className={styles['']}>
        <CardMedia
          component="img"
          className={styles['card-img']}
          image="https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206"
          alt="green iguana"
        />
      </div>
      <CardContent className={styles['card-content']}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate ...
        </Typography>
      </CardContent>
      <CardActions className={styles['card-footer']}>
        <Typography variant="subtitle1">
          25$<del className={styles['card-price']}>20$</del>
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

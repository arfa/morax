import { Grid } from '@mui/material'
import * as React from 'react'
import ProductCardLoader from '@components/loaders/product-card-loader'

export default function ProductListLoader({ number }: { number: number }) {
  return (
    <Grid container spacing={2} border={0}>
      {[...Array(number)].map((item) => (
        <Grid key={item} item xs={12} sm={6} md={3} padding={0} border={0}>
          <ProductCardLoader />
        </Grid>
      ))}
    </Grid>
  )
}

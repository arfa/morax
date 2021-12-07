import ProductCard from '@components/product/product-card'
import { Product } from '@components/types'
import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import * as React from 'react'

const products: Product[] = [
  {
    id: '0',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
]

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home

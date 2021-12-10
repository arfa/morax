import ProductCard from '@components/product/product-card'
import { Product } from '@components/types'
import { Container, Grid, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

const relatedProducts: Product[] = [
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
  {
    id: '1',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '2',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '3',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '4',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '5',
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

const Wishlist: NextPage = () => {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <Container maxWidth="lg">
        {/* Related Products */}
        <Paper
          sx={{
            backgroundColor: 'rgb(255, 255, 255)',
            color: 'rgba(0, 0, 0, 0.87)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            overflow: 'hidden',
            borderRadius: '20px',
            padding: '40px',
            margin: '15px',
            boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
          }}
        >
          <Typography variant="h5" paddingBottom="40px">
            My Wishlist
          </Typography>
          <Grid container spacing={3}>
            {relatedProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Wishlist

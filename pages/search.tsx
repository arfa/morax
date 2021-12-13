import Filters from '@components/filter/Filters'
import ProductCard from '@components/product/product-card'
import { Product } from '@components/types'
import { Container, Grid, Paper, Typography } from '@mui/material'
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
    <>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Category list */}

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgba(0, 0, 0, 0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                overflow: 'hidden',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
              }}
            >
              <Filters />
            </Paper>
          </Grid>

          {/* Product list */}
          <Grid item xs={12} md={8} lg={8}>
            <Paper
              sx={{
                maxWidth: 'xl',
                backgroundColor: 'rgb(255, 255, 255)',
                color: 'rgba(0, 0, 0, 0.87)',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                overflow: 'hidden',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
              }}
            >
              <Typography variant="h5" paddingBottom="40px">
                Products
              </Typography>
              <Grid container spacing={2}>
                {products.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={3}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          {/* <Grid item xs={12} md={8} lg={8}>
            <Grid container spacing={2}>
              <Paper
                sx={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  color: 'rgba(0, 0, 0, 0.87)',
                  transition:
                    'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
                }}
              >
                {products.map((product) => (
                  <Grid key={product.id} item xs={2} sm={6} md={3}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Paper>
            </Grid>
          </Grid> */}
        </Grid>
      </Container>
    </>
  )
}

export default Home

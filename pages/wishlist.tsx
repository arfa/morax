import type { Product } from '@commerce/types/product'
import { Container, Grid, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

const relatedProducts: Product[] = []

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
                {/* products go here */}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Wishlist

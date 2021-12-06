import ProductCard from '@components/product/ProductCard'
import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import * as React from 'react'
const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

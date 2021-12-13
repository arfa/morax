import Filters from '@components/filter/Filters'
import MainBlock from '@components/main-block'
import ProductCard from '@components/product/product-card'
import { Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import * as React from 'react'
import { products } from '../public/data-mock'

const Home: NextPage = () => {
  return (
    <>
      <MainBlock
        leftBlock={<Filters />}
        rightBlock={
          <>
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
          </>
        }
      />
    </>
  )
}

export default Home

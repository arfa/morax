import type { Product } from '@commerce/types/product'
import Filters from '@components/filter/Filters'
import MainBlock from '@components/main-block'
import { Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import * as React from 'react'

const products: Product[] = []

const Search: NextPage = () => {
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
                  products go here
                </Grid>
              ))}
            </Grid>
          </>
        }
      />
    </>
  )
}

export default Search

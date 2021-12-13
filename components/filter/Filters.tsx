import { Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import CategoryFilter from './category-filter'
import PriceFilter from './price-filter'
import RelevanceFilter from './relevance-filter'

export default function Filters() {
  return (
    <>
      <Typography variant="h5" paddingBottom="40px">
        Filters
      </Typography>
      <Divider />

      <Typography variant="body1" paddingY="10px">
        Category
      </Typography>
      <CategoryFilter />
      <Divider />
      <RelevanceFilter />
      <Divider />

      <PriceFilter />
    </>
  )
}

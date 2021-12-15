import { Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import CategoryFilter from './category-filter'
import PriceFilter from './price-filter'
import RelevanceFilter from './relevance-filter'
import { category } from '../types'
interface Props {
  categories: category[]
}
export default function Filters({ categories }: Props) {
  return (
    <>
      <Typography variant="h5" paddingBottom="40px">
        Filters
      </Typography>
      <Divider />

      <Typography variant="body1" paddingY="10px">
        Category
      </Typography>
      <CategoryFilter categories={categories} />
      <Divider />
      <RelevanceFilter />
      <Divider />

      <PriceFilter />
    </>
  )
}

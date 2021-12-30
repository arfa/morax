import { Product } from '@commerce/types/product'
import { Grid, Typography } from '@mui/material'
import ProductCardContainer from './ProductCardContainer'

interface ProductRelatedProps {
  relatedProducts: Product[]
}

export default function ProductRelated({
  relatedProducts,
}: ProductRelatedProps) {
  return (
    <Grid border={0}>
      <Typography variant="h5">Related Products</Typography>
      <Grid container spacing={2} border={0}>
        {relatedProducts.map((p) => {
          return (
            <Grid key={p.id} item xs={12} sm={6} md={2} padding={0} border={0}>
              <ProductCardContainer product={p} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

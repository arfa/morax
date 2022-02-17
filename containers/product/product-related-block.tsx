import { Product } from '@commerce/types/product'
import { Grid, Typography } from '@mui/material'
import ProductCardContainer from './product-card'

interface ProductRelatedProps {
  relatedProducts: Product[]
}

export default function ProductRelated({
  relatedProducts,
}: ProductRelatedProps) {
  return (
    <>
      <Typography variant="h5" mt={5}>
        Related Products
      </Typography>
      <Grid container spacing={2} border={0}>
        {relatedProducts.map((p) => {
          return (
            <Grid
              key={p.id}
              item
              lg={2}
              md={3}
              sm={4}
              xs={12}
              padding={0}
              border={0}
            >
              <ProductCardContainer product={p} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

import { Product } from '@commerce/types/product'
import { Grid, Paper, Typography } from '@mui/material'
import ProductCardContainer from './ProductCardContainer'

interface ProductRelatedProps {
  relatedProducts: Product[]
}

export default function ProductRelated({
  relatedProducts,
}: ProductRelatedProps) {
  return (
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
        Related Products
      </Typography>
      <Grid container spacing={2}>
        {relatedProducts.map((p) => {
          return (
            <Grid key={p.id} item xs={12} sm={6} md={2}>
              <ProductCardContainer product={p} />
            </Grid>
          )
        })}
      </Grid>
    </Paper>
  )
}

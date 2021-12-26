import { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import {
  Box,
  CardMedia, Grid,
  Paper,
  Typography
} from '@mui/material'
import ProductSideBlock from './ProductSideBlock'

const placeholderImg = '/product-img-placeholder.svg'
interface ProductMainBlockProps {
  product: Product
}

export default function ProductMainBlock({
  product,
}: ProductMainBlockProps) {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
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
      <Grid container spacing={3} marginTop={1}>
        {/* Product Image */}
        <Grid item xs={12} md={4} lg={3}>
          <CardMedia
            component="img"
            sx={{ borderRadius: '25px' }}
            image={product.images[0]?.url || placeholderImg}
            alt={product.name || 'Product Image'}
          />
        </Grid>

        {/* Product detail */}
        <Grid item>
          <Grid container spacing={2}>
            <Box flexDirection="row" padding="20px">
              <Typography variant="h4">{product.name}</Typography>
              <Typography variant="h6" sx={{ marginY: '20px' }}>
                {price}
              </Typography>
              <ProductSideBlock product={product} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

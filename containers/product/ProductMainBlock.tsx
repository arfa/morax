import { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { CardMedia, Grid, Stack, Typography } from '@mui/material'
import ProductSideBlock from './ProductSideBlock'

const placeholderImg = '/product-img-placeholder.svg'
interface ProductMainBlockProps {
  product: Product
}

export default function ProductMainBlock({ product }: ProductMainBlockProps) {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  return (
    <Grid container spacing={3} marginTop={5} border={0}>
      <Stack direction="row" spacing={2}>
        {/* Product Image */}
        <Grid item xs={12} md={4} lg={3} border={0}>
          <CardMedia
            component="img"
            sx={{ borderRadius: '25px' }}
            image={product.images[0]?.url || placeholderImg}
            alt={product.name || 'Product Image'}
          />
        </Grid>

        {/* Product detail */}
        <Grid item border={0}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6" sx={{ marginTop: '10px' }}>
            {price}
          </Typography>
          <ProductSideBlock product={product} />
        </Grid>
      </Stack>
    </Grid>
  )
}

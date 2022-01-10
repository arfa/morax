import { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { CardMedia, Grid, Typography } from '@mui/material'
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
      {/* Product Image */}
      <Grid item sm={12} md={6} border={0}>
        <CardMedia
          component="img"
          image={product.images[0]?.url || placeholderImg}
          alt={product.name || 'Product Image'}
        />
      </Grid>

      {/* Product detail */}
      <Grid item sm={12} md={6} border={0}>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="h6" sx={{ marginTop: '10px' }}>
          {price}
        </Typography>
        <ProductSideBlock product={product} />
      </Grid>
    </Grid>
  )
}

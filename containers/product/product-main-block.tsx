import { Product } from '@commerce/types/product'
import Slider from '@components/slider/slider'
import usePrice from '@framework/product/use-price'
import { Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import ProductSideBlock from './product-sidebar'

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
      <Grid item xs={12} sm={12} md={6} border={0}>
        <Slider key={product.id}>
          {product.images.map((image) => (
            <div key={image.url}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={image.url!}
                  alt={image.alt || 'Product Image'}
                  width={300}
                  height={300}
                  quality="85"
                />
              </Stack>
            </div>
          ))}
        </Slider>
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

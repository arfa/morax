import { Product } from '@commerce/types/product'
import ProductCard from '@components/product/product-card'
import ProductColorRadio from '@components/product/product-color-radio'
import ProductDetailTab from '@components/product/product-detail-tabs'
import SizeSelect from '@components/product/size-select'
import usePrice from '@framework/product/use-price'
import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { NextSeo } from 'next-seo'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const placeholderImg = '/product-img-placeholder.svg'
interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
}

export default function ProductView({
  product,
  relatedProducts,
}: ProductViewProps) {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <>
      <Container maxWidth="lg">
        {/* main product paper */}
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
                  <Typography variant="body1" paddingTop="20px">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" sx={{ marginY: '20px' }}>
                    {price}
                  </Typography>

                  <ProductColorRadio />
                  <Divider sx={{ marginY: '20px' }} />
                  <Stack direction="row" spacing={2} sx={{ marginTop: '20px' }}>
                    <SizeSelect />
                    <TextField
                      id="quantity"
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                  <Stack direction="row" spacing={2} sx={{ marginTop: '50px' }}>
                    <Button
                      variant="outlined"
                      startIcon={<HiOutlineShoppingCart />}
                    >
                      Add to Cart
                    </Button>
                    <Button variant="contained">Buy Now</Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* poduct details paper */}
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
          <ProductDetailTab />
        </Paper>

        {/* Related Products */}
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
            {relatedProducts.map((p) => (
              <Grid key={p.id} item xs={12} sm={6} md={2}>
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
    </>
  )
}

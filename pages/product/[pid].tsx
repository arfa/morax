import AppBreadcrumbs from '@components/Breadcrumbs'
import ProductCard from '@components/product/product-card'
import ProductColorRadio from '@components/product/product-color-radio'
import ProductDetailTab from '@components/product/product-detail-tabs'
import SizeSelect from '@components/product/size-select'
import usePrice from '@components/product/use-price'
import { Product } from '@components/types'
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
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
const product: Product = {
  id: '0',
  image:
    'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
  price: 25,
  sale_price: 20,
  quantity: 10,
  name: 'T-shirt',
  description:
    'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
}
const relatedProducts: Product[] = [
  {
    id: '0',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '1',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '2',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '3',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '4',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
  {
    id: '5',
    image:
      'https://cdn.shopify.com/s/files/1/0752/6435/products/Shade2.jpg?v=1607128206',
    price: 25,
    sale_price: 20,
    quantity: 10,
    name: 'T-shirt',
    description:
      'Incididunt minim anim fugiat consectetur elit consectetur culpa...',
  },
]

const Product: NextPage = () => {
  const router = useRouter()
  const { pid } = router.query
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price,
    baseAmount: product.price,
    currencyCode: 'USD',
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
          <AppBreadcrumbs />
          <Grid container spacing={3} marginTop={1}>
            {/* Product Image */}
            <Grid item xs={12} md={4} lg={3}>
              <CardMedia
                component="img"
                sx={{ borderRadius: '25px' }}
                image={product.image}
                alt="green iguana"
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
                    {discount && (
                      <del
                        style={{
                          color: 'rgb(153, 153, 153)',
                          marginLeft: '10px',
                        }}
                      >
                        {basePrice}
                      </del>
                    )}
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
            {relatedProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={2}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default Product

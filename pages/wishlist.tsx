import ProductCard from '@components/product/product-card'
import useWishlist from '@framework/wishlist/use-wishlist'
import { Container, Grid, Paper, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Wishlist: NextPage = () => {
  // @ts-ignore Shopify - Fix this types
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })

  return (
    <>
      <Container maxWidth="lg">
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
            My Wishlist
          </Typography>
          {isLoading ? (
            <p>loading...</p>
          ) : isEmpty ? (
            <p>Your wishlist is empty</p>
          ) : (
            <Grid container spacing={3}>
              {data &&
                // @ts-ignore Shopify - Fix this types
                data.items?.map((item) => (
                  <Grid key={item.id} item xs={12} sm={6} md={3}>
                    <ProductCard product={item.product! as any} />
                  </Grid>
                ))}
            </Grid>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default Wishlist

import useWishlist from '@framework/wishlist/use-wishlist'
import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import ProductCardContainer from '../containers/product/ProductCardContainer'

const Wishlist: NextPage = () => {
  // @ts-ignore Shopify - Fix this types
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })

  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
        {/* Related Products */}

        <Typography variant="h5" paddingBottom="40px">
          My Wishlist
        </Typography>
        {isLoading ? (
          <p>loading...</p>
        ) : isEmpty ? (
          <p>Your wishlist is empty</p>
        ) : (
          <Grid container spacing={2} border={0}>
            {data &&
              // @ts-ignore Shopify - Fix this types
              data.items?.map((item) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={6}
                  md={2}
                  padding={0}
                  border={0}
                >
                  <ProductCardContainer product={item.product! as any} />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </>
  )
}

export default Wishlist

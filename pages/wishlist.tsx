import ProductCardLoader from '@components/loaders/product-card-loader'
import useWishlist from '@framework/wishlist/use-wishlist'
import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import ProductCardContainer from '../containers/product/ProductCardContainer'

const Wishlist: NextPage = () => {
  // @ts-ignore Shopify - Fix this types
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })
  console.log(data, isLoading, isEmpty)
  let wishlistContent = null
  if (isEmpty && data?.items.length == 0) {
    wishlistContent = <p>Your wishlist is empty</p>
  }

  if (isLoading) {
    wishlistContent = (
      <Grid container spacing={2} border={0}>
        {[1, 2, 3, 4]?.map((item) => (
          <Grid key={item} item xs={12} sm={6} md={2} padding={0} border={0}>
            <ProductCardLoader />
          </Grid>
        ))}
      </Grid>
    )
  }

  if (!isLoading && !isEmpty) {
    wishlistContent = (
      <Grid container spacing={2} border={0}>
        {data.items?.map((item: any) => (
          <Grid key={item.id} item xs={12} sm={6} md={2} padding={0} border={0}>
            <ProductCardContainer product={item.product! as any} />
          </Grid>
        ))}
      </Grid>
    )
  }
  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      {/* Related Products */}
      <Typography variant="h5" paddingBottom="40px">
        My Wishlist
      </Typography>
      {wishlistContent}
    </Container>
  )
}

export default Wishlist

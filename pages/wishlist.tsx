import useWishlist from '@framework/wishlist/use-wishlist'
import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import ProductCardContainer from '../containers/product/ProductCardContainer'

const WishlistContent = () => {
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })

  if (isEmpty && data?.items.length == 0) {
    return <p>Your wishlist is empty</p>
  }

  if (!isLoading && !isEmpty) {
    return (
      <Grid container spacing={2} border={0}>
        {data.items?.map((item: any) => (
          <Grid key={item.id} item xs={12} sm={6} md={2} padding={0} border={0}>
            <ProductCardContainer product={item.product! as any} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return null
}

const Wishlist: NextPage = () => {
  // @ts-ignore Shopify - Fix this types
  return (
    <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
      {/* Related Products */}
      <Typography variant="h5" paddingBottom="40px">
        My Wishlist
      </Typography>
      <WishlistContent />
    </Container>
  )
}

export default Wishlist

import ProductListLoader from '@components/loaders/product-list-loader'
import useCustomer from '@framework/customer/use-customer'
import useWishlist from '@framework/wishlist/use-wishlist'
import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import ProductCardContainer from '../containers/product/product-card'
import { NextSeo } from 'next-seo'
import Router from 'next/router'

const WishlistContent = () => {
  const { data, isLoading, isEmpty } = useWishlist({ includeProducts: true })
  const { data: customer } = useCustomer()
  if (!customer) {
    Router.push('/login')
  }
  if (isEmpty && data?.items.length == 0) {
    return <p>Your wishlist is empty</p>
  }
  if (isLoading) {
    return <ProductListLoader number={3} />
  }
  if (!isLoading && !isEmpty) {
    return (
      <>
        <Grid container spacing={2} border={0}>
          {data.items?.map((item: any) => (
            <Grid
              key={item.id}
              item
              lg={2}
              md={3}
              sm={4}
              xs={12}
              padding={0}
              border={0}
            >
              <ProductCardContainer product={item.product! as any} />
            </Grid>
          ))}
        </Grid>
        <NextSeo
          title={`Wishlist`}
          description={`${customer.firstName}'s wishlist`}
        />
      </>
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

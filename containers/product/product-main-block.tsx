import ReviewForm from '@components/reviews/review-form'
import Slider from '@components/slider/slider'
import useCustomer from '@framework/customer/use-customer'
import usePrice from '@framework/product/use-price'
import { Grid, Rating, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import ProductSideBlock from './product-sidebar'
import axios from 'axios'

const placeholderImg = '/product-img-placeholder.svg'
interface ProductMainBlockProps {
  product: any
}

async function addReview(product: any, review: any) {
  await axios.post(`/api/reviews`, {
    params: { pid: product.id, review },
  })
}

export default function ProductMainBlock({ product }: ProductMainBlockProps) {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  const { data: customer } = useCustomer()
  return (
    <Grid container spacing={3} marginTop={5} border={0}>
      {/* Product Image */}
      <Grid item xs={12} sm={12} md={6} border={0}>
        <Slider key={product.id}>
          {product.images.map((image: any) => (
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
        <Stack direction="row" spacing={2}>
          <Rating
            name="read-only"
            value={
              product.reviewSummary.summationOfRatings /
              product.reviewSummary.numberOfReviews
            }
            readOnly
            precision={0.5}
          />
          <ReviewForm
            disabled={!customer}
            image={product.images[0].url}
            title={product.name}
            rate={
              product.reviewSummary.summationOfRatings /
              product.reviewSummary.numberOfReviews
            }
            onSubmit={(v) =>
              addReview(product, {
                status: 'approved',
                ...v,
                name: customer
                  ? customer.firstName + ' ' + customer.lastName
                  : '',
                email: customer ? customer.email : '',
                date_reviewed: format(
                  new Date(),
                  "yyyy-MM-dd'T'HH:mm:ss+00:00"
                ),
              })
            }
          />
        </Stack>
        <Typography
          variant="h6"
          sx={{ marginTop: '10px', color: 'text.secondary' }}
        >
          {price}
        </Typography>
        <ProductSideBlock product={product} />
      </Grid>
    </Grid>
  )
}

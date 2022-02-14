import type { Product } from '@commerce/types/product'
import ProductOptions from '@components/product/product-options'
import Social from '@components/product/social'
import LoadingButton from '@mui/lab/LoadingButton'
import { Stack } from '@mui/material'
import { HiOutlineShoppingCart } from 'react-icons/hi'

interface ProductSidebarProps {
  product: Product
  className?: string
  onAddToCart?: () => void
  cartEnabled: boolean
  loading?: boolean
  availableForSale?: boolean
  selectedOptions?: any
  setSelectedOptions?: any
  socialUrl: string
}

export default function ProductSidebar({
  product,
  onAddToCart,
  cartEnabled = true,
  loading = false,
  availableForSale = true,
  selectedOptions,
  setSelectedOptions,
  socialUrl,
}: ProductSidebarProps) {
  const addToCart = () => {
    if (onAddToCart) {
      onAddToCart()
    }
  }

  return (
    <>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 3 }}>
        {cartEnabled && (
          <LoadingButton
            sx={{ mt: 0 }}
            variant="outlined"
            startIcon={<HiOutlineShoppingCart />}
            onClick={addToCart}
            loading={loading}
            loadingPosition="start"
          >
            {availableForSale ? 'Add To Cart' : 'Not Available'}
          </LoadingButton>
        )}

        <Social
          url={socialUrl}
          image={product.images[0]?.url!}
        />
      </Stack>
    </>
  )
}

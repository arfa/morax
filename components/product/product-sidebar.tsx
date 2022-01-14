import type { Product } from '@commerce/types/product'
import ProductOptions from '@components/product/product-options'
import LoadingButton from '@mui/lab/LoadingButton'
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
}

export default function ProductSidebar({
  product,
  className,
  onAddToCart,
  cartEnabled = true,
  loading = false,
  availableForSale = true,
  selectedOptions,
  setSelectedOptions,
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

      {cartEnabled && (
        <LoadingButton
          sx={{ marginTop: '30px' }}
          variant="outlined"
          startIcon={<HiOutlineShoppingCart />}
          onClick={addToCart}
          loading={loading}
          loadingPosition="start"
        >
          {availableForSale ? 'Add To Cart' : 'Not Available'}
        </LoadingButton>
      )}
    </>
  )
}

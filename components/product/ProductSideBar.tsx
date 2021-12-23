import type { Product } from '@commerce/types/product'
import ProductOptions from '@components/product/ProductOptions'
import LoadingButton from '@mui/lab/LoadingButton'
import { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { SelectedOptions } from './helpers'

interface ProductSidebarProps {
  product: Product
  className?: string
  onAddToCart?: () => void
  cartEnabled: boolean
  loading?: boolean
  availableForSale?: boolean
}

export default function ProductSidebar({
  product,
  className,
  onAddToCart,
  cartEnabled = true,
  loading = false,
  availableForSale = true,
}: ProductSidebarProps) {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  const addToCart = async () => {
    if (onAddToCart) {
      await onAddToCart()
    }
  }
  return (
    <div className={className}>
      <ProductOptions
        options={product.options}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />
      <div>
        {cartEnabled && (
          <LoadingButton
            sx={{ marginTop: '10px' }}
            variant="outlined"
            startIcon={<HiOutlineShoppingCart />}
            onClick={addToCart}
            loading={loading}
            loadingPosition="start"
          >
            {availableForSale ? 'Add To Cart' : 'Not Available' }
          </LoadingButton>
        )}
      </div>
    </div>
  )
}

import type { Product } from '@commerce/types/product'
import ProductOptions from '@components/product/ProductOptions'
//  import { useAddItem } from '@framework/cart'
import { useEffect, useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  SelectedOptions,
  getProductVariant,
  selectDefaultOptionFromProduct,
} from './helpers'

interface ProductSidebarProps {
  product: Product
  className?: string
}

export default function ProductSidebar({
  product,
  className,
}: ProductSidebarProps) {
  //TODO: const addItem = useAddItem()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      console.log({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      //TODO:  await addItem({
      //     productId: String(product.id),
      //     variantId: String(variant ? variant.id : product.variants[0].id),
      //   })
      setLoading(false)
    } catch (err) {
      setLoading(false)
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
        {process.env.COMMERCE_CART_ENABLED && (
          <LoadingButton
            sx={{ marginTop: '10px' }}
            variant="outlined"
            startIcon={<HiOutlineShoppingCart />}
            onClick={addToCart}
            loading={loading}
            loadingPosition="start"
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </LoadingButton>
        )}
      </div>
    </div>
  )
}

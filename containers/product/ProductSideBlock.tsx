import type { Product } from '@commerce/types/product'
import {
  SelectedOptions,
  getProductVariant,
  selectDefaultOptionFromProduct,
} from '@components/product/helpers'
import ProductSidebar from '@components/product/ProductSideBar'
import { useAddItem } from '@framework/cart'
import { useEffect, useState } from 'react'

interface ProductSideBlockProps {
  product: Product
  className?: string
}

export default function ProductSideBlock({ product }: ProductSideBlockProps) {
  const addItem = useAddItem()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  return (
    <ProductSidebar
      product={product}
      onAddToCart={addToCart}
      loading={loading}
      availableForSale={variant?.availableForSale}
      cartEnabled={!!process.env.COMMERCE_CART_ENABLED}
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
    />
  )
}

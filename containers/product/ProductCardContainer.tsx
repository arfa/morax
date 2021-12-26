import { Product } from '@commerce/types/product'
import ProductCard from '@components/product/product-card'
import usePrice from '@framework/product/use-price'
import useCustomer from '@framework/customer/use-customer'
import useAddItem from '@framework/wishlist/use-add-item'
import useRemoveItem from '@framework/wishlist/use-remove-item'
import useWishlist from '@framework/wishlist/use-wishlist'
import Router from 'next/router'

const placeholderImg = '/product-img-placeholder.svg'
interface ProductCardContainerProps {
  product: Product
}

export default function ProductCardContainer({
  product,
}: ProductCardContainerProps) {
  const { data } = useWishlist()
  const addItem = useAddItem()
  const removeItem = useRemoveItem()
  const { data: customer } = useCustomer()
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  // @ts-ignore Wishlist is not always enabled
  const itemInWishlist = data?.items?.find(
    // @ts-ignore Wishlist is not always enabled
    (item) =>
      item.product_id === Number(product.id) &&
      (item.variant_id as any) === Number(product.variants[0].id)
  )

  const handleWishlistChange = async () => {
    // if (loading) return

    // A login is required before adding an item to the wishlist
    if (!customer) {
      Router.push('/login')
    }

    // setLoading(true)

    try {
      if (itemInWishlist) {
        await removeItem({ id: itemInWishlist.id! })
      } else {
        await addItem({
          productId: product.id,
          variantId: product.variants[0].id,
        })
      }

      // setLoading(false)
    } catch (err) {
      // setLoading(false)
    }
  }
  return (
    <ProductCard
      image={product?.images[0]?.url || placeholderImg}
      name={product.name}
      price={price}
      slug={product.slug}
      itemInWishlist={itemInWishlist}
      handleWishlistChange={handleWishlistChange}
      wishlistEnabled={!!process?.env?.COMMERCE_WISHLIST_ENABLED}
      // productId={product.id}
      // variant={product.variants[0] as any}
    />
  )
}

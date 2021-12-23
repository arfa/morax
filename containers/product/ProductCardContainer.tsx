import { Product } from '@commerce/types/product'
import ProductCard from '@components/product/product-card'
import usePrice from '@framework/product/use-price'

const placeholderImg = '/product-img-placeholder.svg'
interface ProductCardContainerProps {
  product: Product
}

export default function ProductCardContainer({
  product,
}: ProductCardContainerProps) {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })
  return (
   <ProductCard
              image={product?.images[0]?.url || placeholderImg}
              name={product.name}
              price={price}
              slug={product.slug}
            />
  )
}

export interface Product {
  id: number | string
  name: string
  price: number
  quantity: number
  sale_price?: number
  image: string
  description?: string
}

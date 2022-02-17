export type CategoryImage = {
  url: string
  alt?: string
}
export type Category = {
  id: string
  name: string
  slug: string
  path: string
  image: CategoryImage
}

export type Brand = any

export type SiteTypes = {
  category: Category
  brand: Brand
}

export type GetSiteInfoOperation<T extends SiteTypes = SiteTypes> = {
  data: {
    categories: T['category'][]
    brands: T['brand'][]
  }
}

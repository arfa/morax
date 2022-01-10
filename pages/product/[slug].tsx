import commerce from '@lib/api/commerce'
import { Container } from '@mui/material'
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as React from 'react'
import ProductDetailsBlock from '../../containers/product/ProductDetailsBlock'
import ProductMainBlock from '../../containers/product/ProductMainBlock'
import ProductRelated from '../../containers/product/ProductRelatedBlock'
import espcapeHtml from '../../lib/escape-html'

export async function getStaticProps({
  params,
  locale,
  locales,
  preview,
}: GetStaticPropsContext<{ slug: string }>) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const productPromise = commerce.getProduct({
    variables: { slug: params!.slug },
    config,
    preview,
  })

  const allProductsPromise = commerce.getAllProducts({
    variables: { first: 4 },
    config,
    preview,
  })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const { product } = await productPromise
  const { products: relatedProducts } = await allProductsPromise

  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }

  return {
    props: {
      pages,
      product,
      relatedProducts,
      categories,
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const { products } = await commerce.getAllProductPaths()

  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product: any) => {
            arr.push(`/${locale}/product${product.path}`)
          })
          return arr
        }, [])
      : products.map((product: any) => `/product${product.path}`),
    fallback: 'blocking',
  }
}

export default function Slug({
  product,
  relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Container maxWidth="lg">
        {/* main product paper */}
        <ProductMainBlock product={product} />
        {/* poduct details paper */}
        <ProductDetailsBlock product={product} />

        {/* Related Products */}
        <ProductRelated relatedProducts={relatedProducts} />
      </Container>
      <NextSeo
        title={product.name}
        description={espcapeHtml(product.description)}
        openGraph={{
          type: 'website',
          title: product.name,
          description: espcapeHtml(product.description),
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
    </>
  )
}

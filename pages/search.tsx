import type { Product } from '@commerce/types/product'
import Filters from '@components/filter/Filters'
import MainBlock from '@components/main-block'
import { Grid, Typography } from '@mui/material'
import commerce from '@lib/api/commerce'
import * as React from 'react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const products: Product[] = []

export default function Search({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <MainBlock
        leftBlock={<Filters categories={categories} />}
        rightBlock={
          <>
            <Typography variant="h5" paddingBottom="40px">
              Products
            </Typography>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={3}>
                  products go here
                </Grid>
              ))}
            </Grid>
          </>
        }
      />
    </>
  )
}

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 60,
  }
}

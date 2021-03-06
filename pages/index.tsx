import CategoryList from '@components/category/category-list'
import MainBlock from '@components/layouts/main-block'
import commerce from '@lib/api/commerce'
import { Grid, Typography } from '@mui/material'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import * as React from 'react'
import ProductCardContainer from '../containers/product/product-card'

export default function Home({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainBlock
      leftBlock={<CategoryList data={categories} />}
      rightBlock={
        <>
          <Typography variant="h5" paddingBottom="30px">
            Flash Sale
          </Typography>
          <Grid container spacing={2} border={'1px'}>
            {products.map((product) => (
              <Grid
                key={product.id}
                item
                xl={2}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                padding={0}
                border={0}
              >
                <ProductCardContainer product={product} />
              </Grid>
            ))}
          </Grid>
        </>
      }
    />
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

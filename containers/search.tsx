import MainBlock from '@components/layouts/main-block'
import ProductListLoader from '@components/loaders/product-list-loader'
import useSearch from '@framework/product/use-search'
import { useSearchMeta } from '@lib/search'
import type { SearchPropsType } from '@lib/search-props'
import { Grid, Typography } from '@mui/material'
import ProductCardContainer from 'containers/product/product-card'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as React from 'react'
import CategoryList from '../components/category/category-list'

const SearchContent = ({ categories }: any) => {
  const router = useRouter()
  const { asPath, locale } = router
  const { q, sort } = router.query
  const { category } = useSearchMeta(asPath)

  const activeCategory = categories.find((cat: any) => cat.slug === category)
  const { data, isLoading, error } = useSearch({
    search: typeof q === 'string' ? q : '',
    categoryId: activeCategory?.id,
    sort: typeof sort === 'string' ? sort : '',
    locale,
  })

  if (isLoading) {
    return (
      <>
        {q ? (
          <Typography variant="body1">
            Searching for: "<strong>{q}</strong>"
          </Typography>
        ) : (
          <ProductListLoader number={3} />
        )}
      </>
    )
  }

  if (!isLoading && !error) {
    return (
      <>
        {!data?.found ? (
          <p>
            {q && (
              <>
                <Typography variant="body1">
                  There are no products that match <strong>{q}</strong>
                </Typography>
                <NextSeo
                  title={`Search - ${q}`}
                  description={`There are no products that match ${q}`}
                />
              </>
            )}
          </p>
        ) : (
          <span>
            {q || activeCategory ? (
              <>
                <Typography variant="body1">
                  Showing {data?.products.length} results{' '}
                </Typography>
                <NextSeo
                  title={`Category - ${activeCategory?.name}`}
                  description={`${activeCategory?.name} : ${data?.products.length} products`}
                />
                {q && (
                  <>
                    <Typography variant="body1">
                      for "<strong>{q}</strong>"
                    </Typography>
                    <NextSeo
                      title={`Search - ${q}`}
                      description={`${data?.products.length} results for : ${q}`}
                    />
                  </>
                )}
              </>
            ) : (
              <Typography variant="body1">
                There are no products that match the selected category.
              </Typography>
            )}
          </span>
        )}

        <Grid container spacing={2} border={0}>
          {data?.products.map((product) => (
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
    )
  }

  return null
}

export default function Search({ categories }: SearchPropsType) {
  return (
    <>
      <MainBlock
        leftBlock={<CategoryList data={categories} />}
        rightBlock={<SearchContent categories={categories} />}
      />
    </>
  )
}

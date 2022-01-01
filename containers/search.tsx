import MainBlock from '@components/layouts/main-block'
import useSearch from '@framework/product/use-search'
import { filterQuery, useSearchMeta } from '@lib/search'
import type { SearchPropsType } from '@lib/search-props'
import { Grid, Typography } from '@mui/material'
import ProductCardContainer from 'containers/product/ProductCardContainer'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'
import CategoryList from '../components/category/category-list'

export default function Search({ categories }: SearchPropsType) {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)

  const router = useRouter()
  const { asPath, locale } = router
  const { q, sort } = router.query
  const query = filterQuery({ sort })
  const { pathname, category } = useSearchMeta(asPath)
  const activeCategory = categories.find((cat: any) => cat.slug === category)

  const { data } = useSearch({
    search: typeof q === 'string' ? q : '',
    categoryId: activeCategory?.id,
    sort: typeof sort === 'string' ? sort : '',
    locale,
  })
  const handleClick = (event: any, filter: string) => {
    if (filter !== activeFilter) {
      setToggleFilter(true)
    } else {
      setToggleFilter(!toggleFilter)
    }
    setActiveFilter(filter)
  }

  return (
    <>
      <MainBlock
        leftBlock={<CategoryList data={categories} />}
        rightBlock={
          <>
            <Typography variant="h5" paddingBottom="30px">
              Products
            </Typography>
            {(q || activeCategory) && (
              <div>
                {data ? (
                  <>
                    <span hidden={!data.found}>
                      Showing {data.products.length} results{' '}
                      {q && (
                        <>
                          for "<strong>{q}</strong>"
                        </>
                      )}
                    </span>
                    <span hidden={data.found}>
                      {q ? (
                        <>
                          There are no products that match "<strong>{q}</strong>
                          "
                        </>
                      ) : (
                        <>
                          There are no products that match the selected
                          category.
                        </>
                      )}
                    </span>
                  </>
                ) : q ? (
                  <>
                    Searching for: "<strong>{q}</strong>"
                  </>
                ) : (
                  <>Searching...</>
                )}
              </div>
            )}
            {/* products list  */}
            <Grid container spacing={2} border={0}>
              {data?.products.map((product) => (
                <Grid
                  key={product.id}
                  item
                  padding={0}
                  border={0}
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <ProductCardContainer product={product} />
                </Grid>
              ))}
            </Grid>
          </>
        }
      />
    </>
  )
}

import SearchButton from '@components/buttons/search-button'
import * as React from 'react'
import { useRouter } from 'next/router'
import useSearch from '@framework/product/use-search'

export default function SearchButtonCtn() {
  const router = useRouter()
  const [query, setQuery] = React.useState('')

  const { data, isLoading, error } = useSearch({
    search: query,
  })

  const onChange = React.useCallback(
    (_e, value, reason, details) => {
      switch (reason) {
        case 'createOption':
          router.push(
            {
              pathname: '/search',
              query: value ? { q: value } : {},
            },
            undefined,
            { shallow: true }
          )
          break
        case 'selectOption':
          router.push(
            {
              pathname: `/product/${details.option.slug}`,
            },
            undefined,
            { shallow: true }
          )
          break
        default:
          console.log('default');
      }
    },
    [router]
  )

  const onInputChange = React.useCallback((_e, value) => {
    setQuery(value)
  }, [setQuery])

  return (
    <SearchButton
      onChange={onChange}
      onInputChange={onInputChange}
      loading={isLoading}
      options={data?.products || []}
    />
  )
}

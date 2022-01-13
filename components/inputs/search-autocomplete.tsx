import { Product } from '@commerce/types/product'
import useSearch from '@framework/product/use-search'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { debounce } from '@mui/material/utils'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import * as React from 'react'
import { useCallback } from 'react'
import { HiSearch } from 'react-icons/hi'

interface Props {
  placeholder?: string
  onConfirm?: (_v: string) => void
}

export default function SearchAutocomplete({
  placeholder = 'Search for products..',
  onConfirm,
}: Props) {
  const [query, setQuery] = React.useState('')

  const { data, isLoading, error } = useSearch({
    search: query,
  })
  const [open, setOpen] = React.useState(false)
  const onInputChange = useCallback(
    debounce((_event, value) => {
      setQuery(value)
    }, 500),
    []
  )
  return (
    <Autocomplete
      freeSolo
      id="asynchronous"
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      isOptionEqualToValue={(option: Product, value) => option.id === value.id}
      getOptionLabel={(option) => option.name || ''}
      options={data?.products || []}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder={placeholder}
          onChange={(e) => onInputChange(e, e.currentTarget.value)}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              const q = e.target.value
              onConfirm && onConfirm(q)
            }
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: <HiSearch size={20} style={{ margin: 5 }} />,
          }}
        />
      )}
      renderOption={(props, option: Product, { inputValue }) => {
        const matches = match(option.name, inputValue, { insideWords: true })
        const parts = parse(option.name, matches)
        if (inputValue.length < 2) setOpen(false)

        return (
          <li {...props}>
            <div>
              {parts.map((part: any, index: any) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        )
      }}
    />
  )
}

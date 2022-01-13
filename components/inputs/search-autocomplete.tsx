import { Product } from '@commerce/types/product'
import useSearch from '@framework/product/use-search'
import { Modal, Paper, useMediaQuery } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { debounce } from '@mui/material/utils'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useCallback } from 'react'
import { HiSearch } from 'react-icons/hi'

interface Props {
  openModal: boolean
  placeholder?: string
  handleClose?: any
}

export default function SearchAutocomplete({
  openModal,
  placeholder = 'Search for products..',
  handleClose,
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
  const breakpoint = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const router = useRouter()

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
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper
            sx={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: breakpoint ? '90%' : '50%',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 2,
            }}
          >
            <TextField
              autoFocus
              {...params}
              hiddenLabel
              placeholder={placeholder}
              onChange={(e) => onInputChange(e, e.currentTarget.value)}
              onKeyUp={(e: any) => {
                const q = e.target.value
                setQuery(q)
                if (e.key === 'Enter') {
                  router.push(
                    {
                      pathname: '/search',
                      query: query ? { q: query } : {},
                    },
                    undefined,
                    { shallow: true }
                  )
                  handleClose()
                }
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: <HiSearch size={20} style={{ margin: 5 }} />,
              }}
            />
          </Paper>
        </Modal>
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

import { IconButton } from '@mui/material'
import * as React from 'react'
import { HiSearch } from 'react-icons/hi'
import { Product } from '@commerce/types/product'
import { Dialog, useMediaQuery } from '@mui/material'
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteProps,
} from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

interface Props
  extends Partial<AutocompleteProps<any, undefined, undefined, undefined>> {
  isOpen?: boolean
  searchText?: string
}

export default function SearchButton({
  options = [],
  loading = false,
  isOpen = false,
  placeholder = 'Search for products..',
  onInputChange,
  onChange,
  searchText,
}: Props) {
  const [open, setOpen] = React.useState(isOpen)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const _onChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any,
    reason: AutocompleteChangeReason,
    details: AutocompleteChangeDetails<any> | undefined
  ) => {
    setOpen(false)
    onChange && onChange(event, value, reason, details)
  }
  const breakpoint = useMediaQuery((theme: any) => theme.breakpoints.down('md'))

  return (
    <>
      <IconButton onClick={handleOpen}>
        <HiSearch size={20} />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={breakpoint ? 'sm' : 'md'}
        fullWidth
        aria-labelledby="Dialog-Dialog-title"
        aria-describedby="Dialog-Dialog-description"
        sx={{
          '& .MuiDialog-container': {
            alignItems: 'flex-start',
          },
        }}
      >
        <Autocomplete
          freeSolo
          id="asynchronous"
          open={open && !!searchText && options.length > 0}
          isOptionEqualToValue={(option: Product, value) =>
            option.id === value.id
          }
          getOptionLabel={(option) => option.name || ''}
          options={options}
          loading={loading}
          onInputChange={onInputChange}
          onChange={_onChange}
          renderInput={(params) => (
            <TextField
              autoFocus
              {...params}
              hiddenLabel
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                startAdornment: <HiSearch size={20} style={{ margin: 5 }} />,
              }}
            />
          )}
          renderOption={(props, option: Product, { inputValue }) => {
            const matches = match(option.name, inputValue, {
              insideWords: true,
            })
            const parts = parse(option.name, matches)

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
      </Dialog>
    </>
  )
}

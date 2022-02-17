import {
  InputAdornment,
  InputBase,
  InputBaseComponentProps,
} from '@mui/material'
import { KeyboardEventHandler } from 'react'
import { HiSearch } from 'react-icons/hi'
interface Props extends InputBaseComponentProps {
  onSearch: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
  placeholder?: string
}

export default function Searchbar({
  onSearch,
  placeholder = 'Search for products...',
}: Props) {
  return (
    <InputBase
      sx={{ ml: 1 }}
      placeholder={placeholder}
      inputProps={{ 'aria-label': 'Search for products..' }}
      onKeyUp={onSearch}
      endAdornment={
        <InputAdornment position="end">
          <HiSearch size={20} />
        </InputAdornment>
      }
    />
  )
}

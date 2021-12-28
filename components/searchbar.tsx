import { Divider, InputAdornment, InputBase } from '@mui/material'
import { HiSearch } from 'react-icons/hi'
interface Props {
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => any
}
export default function Searchbar({ onKeyUp }: Props) {
  return (
    <>
      <InputBase
        sx={{ ml: 1 }}
        placeholder="Search for products..."
        inputProps={{ 'aria-label': 'Search for products..' }}
        onKeyUp={onKeyUp}
        endAdornment={
          <InputAdornment position="end">
            <HiSearch size={20} />
          </InputAdornment>
        }
      />

      <Divider sx={{ height: 28, marginX: 2 }} orientation="vertical" />
    </>
  )
}

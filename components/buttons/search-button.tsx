import SearchAutocomplete from '@components/inputs/search-autocomplete'
import { IconButton } from '@mui/material'
import * as React from 'react'
import { HiSearch } from 'react-icons/hi'

export default function SearchButton() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <HiSearch size={20} />
      </IconButton>

      <SearchAutocomplete openModal={open} handleClose={handleClose} />
    </div>
  )
}

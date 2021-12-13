import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

export default function SizeSelect() {
  const [size, setSize] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string)
  }

  return (
    <FormControl sx={{ width: '20%' }}>
      <InputLabel id="size-label">Size</InputLabel>
      <Select
        labelId="size-select-label"
        id="size-select"
        value={size}
        label="size"
        onChange={handleChange}
      >
        <MenuItem value={'S'}>S</MenuItem>
        <MenuItem value={'L'}>L</MenuItem>
        <MenuItem value={'M'}>M</MenuItem>
      </Select>
    </FormControl>
  )
}

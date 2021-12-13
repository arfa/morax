import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { Typography } from '@mui/material'

function valuetext(value: number) {
  return `${value}`
}

export default function PriceFilter() {
  const [value, setValue] = React.useState<number[]>([0, 50])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box sx={{ width: 300 }}>
      <Typography variant="body1" paddingBottom="10px">
        Price
      </Typography>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  )
}

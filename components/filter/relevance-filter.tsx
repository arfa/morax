import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function RelevanceFilter() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Relevance</FormLabel>
      <RadioGroup
        aria-label="relevance"
        defaultValue="Trending"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="Trending"
          control={<Radio />}
          label="Trending"
        />
        <FormControlLabel
          value="Last Arrivals"
          control={<Radio />}
          label="Last Arrivals"
        />
        <FormControlLabel
          value="Price: Low to High"
          control={<Radio />}
          label="Price: Low to High"
        />
        <FormControlLabel
          value="Price: High to Low"
          control={<Radio />}
          label="Price: High to Low"
        />
      </RadioGroup>
    </FormControl>
  )
}

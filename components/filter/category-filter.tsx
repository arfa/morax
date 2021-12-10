import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { categories } from '../category/category-list'
export default function CategoryFilter() {
  return (
    <FormGroup>
      {categories.map((category) => (
        <FormControlLabel
          key={category.id}
          control={<Checkbox defaultChecked />}
          label={category.name}
        />
      ))}
    </FormGroup>
  )
}

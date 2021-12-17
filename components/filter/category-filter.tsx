import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { category } from '../types'
interface Props {
  categories: category[]
}
export default function CategoryFilter({ categories }: Props) {
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

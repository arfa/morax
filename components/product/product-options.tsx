import type { ProductOption } from '@commerce/types/product'
import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { memo } from 'react'
import { SelectedOptions } from './helpers'
interface ProductOptionsProps {
  options: ProductOption[]
  selectedOptions: SelectedOptions
  setSelectedOptions: React.Dispatch<React.SetStateAction<SelectedOptions>>
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  return (
    <>
      {options.map((opt) => (
        <div key={opt.displayName} style={{ marginTop: 0 }}>
          <Typography variant="h6" mt={4} mb={1} >
            {opt.displayName}
          </Typography>
          <ToggleButtonGroup
            size="small"
            sx={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {opt.values.map((v, i: number) => {
              const active = selectedOptions[opt.displayName.toLowerCase()]
              return (
                <div key={`${opt.id}-${i}`}>
                  <ToggleButton
                    value="check"
                    selected={v.label.toLowerCase() === active}
                    onChange={() => {
                      setSelectedOptions((selectedOptions) => {
                        return {
                          ...selectedOptions,
                          [opt.displayName.toLowerCase()]:
                            v.label.toLowerCase(),
                        }
                      })
                    }}
                    sx={{
                      minWidth: '40px',
                      minHeight: '40px',
                      padding: '0px',
                      margin: '3px',
                      border: '1px solid',
                      borderColor: 'action.selected',
                      '&:hover': {
                        border: '1px solid',
                        borderColor: 'action.active',
                        backgroundColor: 'background.default',
                      },
                      '&.Mui-focusVisible': { backgroundColor: 'action.selected' },
                      '&.Mui-selected': {
                        borderColor: 'action.active',
                        backgroundColor: 'background.default',
                        '&:hover': { backgroundColor: 'background.default' },
                      },
                    }}
                  >
                    {' '}
                    {v.hexColors ? (
                      <Paper
                        sx={{
                          backgroundColor: v.hexColors[0],
                          borderRadius: '7px',
                          minWidth: '32px',
                          minHeight: '32px',
                        }}
                      />
                    ) : (
                      <Typography variant="body2" sx={{ marginX: 1 }} color="text.disabled">
                        {v.label}
                      </Typography>
                    )}
                  </ToggleButton>
                </div>
              )
            })}
          </ToggleButtonGroup>
        </div>
      ))}
    </>
  )
}

export default memo(ProductOptions)

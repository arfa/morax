import type { ProductOption } from '@commerce/types/product'
import { Paper, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
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
    <Stack direction="row" spacing={10}>
      {options.map((opt) => (
        <div className="pb-4" key={opt.displayName}>
          <h2 className="text-sm font-medium tracking-wide uppercase">
            {opt.displayName}
          </h2>
          <div role="listbox" className="flex flex-row py-4">
            <ToggleButtonGroup size="small">
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
                        marginLeft: '7px',
                        border: '1px solid #e6e6e6',
                        '&:hover': {
                          border: '1px solid #000',
                          backgroundColor: '#fff',
                        },
                        '&.Mui-focusVisible': { backgroundColor: '#fff' },
                        '&.Mui-selected': {
                          border: '1px solid #000',
                          backgroundColor: '#fff',
                          '&:hover': { backgroundColor: '#fff' },
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
                        v.label
                      )}
                    </ToggleButton>
                  </div>
                )
              })}
            </ToggleButtonGroup>
          </div>
        </div>
      ))}
    </Stack>
  )
}

export default memo(ProductOptions)

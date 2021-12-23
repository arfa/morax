import type { ProductOption } from '@commerce/types/product'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { memo } from 'react'
import { IconContext } from 'react-icons'
import { ImStop2 } from 'react-icons/im'
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
    <div>
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
                    >
                      {' '}
                      {v.hexColors ? (
                        <IconContext.Provider
                          value={{
                            color: v.hexColors[0],
                            className: 'global-class-name',
                          }}
                        >
                          <ImStop2 size={20} />
                        </IconContext.Provider>
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
    </div>
  )
}

export default memo(ProductOptions)

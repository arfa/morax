import { Box, Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import { IoMdSquare } from 'react-icons/io'
import usePrice from '@framework/product/use-price'
import type { LineItem } from '@commerce/types/cart'

type ItemOption = {
  name: string
  nameId: number
  value: string
  valueId: number
}

export interface Props {
  item: LineItem
  currencyCode: string
}
export default function CartProductSubtitle({ item, currencyCode }: Props) {
  const { price } = usePrice({
    amount: item.variant.price * item.quantity,
    baseAmount: item.variant.listPrice * item.quantity,
    currencyCode,
  })
  const options = (item as any).options
  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: '10px',
        lineHeight: '1.5',
        color: 'rgb(125, 135, 156)',
        textTransform: 'none',
        whiteSpace: 'normal',
      }}
    >
      {options && options.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bgcolor: 'background.paper',
            paddingBottom: '10px',
          }}
        >
          {price}
          {options.map((option: ItemOption, i: number) => (
            <div key={`${item.id}-${option.name}`}>
              {option.name}
              {' : '}
              {option.name === 'Color' ? (
                <IconContext.Provider
                  value={{
                    color: option.value,
                  }}
                >
                  <IoMdSquare size={8} />
                </IconContext.Provider>
              ) : (
                <span>{option.value}</span>
              )}
              {i === options.length - 1 ? '' : <span />}
            </div>
          ))}
        </Box>
      )}
    </Typography>
  )
}

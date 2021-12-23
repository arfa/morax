import { Box, Typography } from '@mui/material'
import { IconContext } from 'react-icons'
import { IoMdSquare } from 'react-icons/io'

type ItemOption = {
  name: string
  value: string
}

export interface CartItemSubtitleProps {
  price: string
  options: ItemOption[]
}
export default function CartItemSubtitle({
  price,
  options,
}: CartItemSubtitleProps) {
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
            <div key={`${option.name}`}>
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

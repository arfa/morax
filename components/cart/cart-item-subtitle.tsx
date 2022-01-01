import { Divider, Stack } from '@mui/material'
import { IconContext } from 'react-icons'
import { IoMdSquare } from 'react-icons/io'

type ItemOption = {
  name: string
  value: string
}

const OptionSwitch = ({ name, value }: ItemOption) => {
  switch (name) {
    case 'Color':
      return (
        <IconContext.Provider
          value={{
            color: value,
          }}
        >
          <IoMdSquare size={8} />
        </IconContext.Provider>
      )
    default:
      return <span>{value}</span>
  }
}

export interface CartItemSubtitleProps {
  fontSize?: number
  price: string
  options: ItemOption[]
}
export default function CartItemSubtitle({
  price,
  options = [],
  fontSize = 10,
}: CartItemSubtitleProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      fontSize={fontSize}
      paddingY={'5px'}
      color={'#7d879c'}
      divider={<Divider orientation="vertical" flexItem />}
    >
      {price}
      {!!options?.length &&
        options?.map((option: ItemOption) => (
          <span key={`${option.name}`}>
            {`${option.name}: `}
            <OptionSwitch name={option.name} value={option.value} />
          </span>
        ))}
    </Stack>
  )
}

import { Badge, ButtonGroup, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiOutlineTrash,
} from 'react-icons/hi'
export interface CartQuantityHandlerProps {
  value: number
  onIncrease?: (n: number) => any
  onDecrease?: (n: number) => any
  onChange?: (n: number) => any
  onRemove?: () => void
  max?: number
  step?: number
}
export default function CartQuantityHandler({
  value = 0,
  onIncrease,
  onDecrease,
  onChange,
  onRemove,
  max = 100,
  step = 1,
}: CartQuantityHandlerProps) {
  const [quantity, setQuantity] = useState<number>(value)

  function handleIncrease() {
    const newQuantity = Number(quantity) + step
    setQuantity(newQuantity)
    onChange && onChange(newQuantity)
    onIncrease && onIncrease(newQuantity)
  }
  function handleDecrease() {
    const newQuantity = Number(quantity) - step
    setQuantity(newQuantity)
    onChange && onChange(newQuantity)
    onDecrease && onDecrease(newQuantity)
  }

  function handleRemove(event: any) {
    event.preventDefault()
    setQuantity(value)
    onRemove && onRemove()
  }
  return (
    <>
      <Stack direction="row" spacing={1}>
        <ButtonGroup size="small">
          <Button
            aria-label="increase"
            onClick={handleIncrease}
            disabled={quantity < 1 || quantity >= max}
          >
            <HiOutlinePlusSm />
          </Button>
          <Button
            aria-label="Decrease"
            onClick={handleDecrease}
            disabled={quantity <= 1}
          >
            <HiOutlineMinusSm />
          </Button>
        </ButtonGroup>

        <IconButton
          aria-label="Remove"
          onClick={handleRemove}
          sx={{ color: 'text.disabled' }}
        >
          <Badge color="secondary" badgeContent={quantity}>
            <HiOutlineTrash />
          </Badge>
        </IconButton>
      </Stack>
    </>
  )
}

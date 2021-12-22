import { Badge, ButtonGroup, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiOutlineTrash,
} from 'react-icons/hi'
export interface QuantityProps {
  value: number
  handleIncrease: () => any
  handleDecrease: () => any
  handleRemove: React.MouseEventHandler<HTMLButtonElement>
  max?: number
}
export default function CartQuantityHandler({
  value,
  handleIncrease,
  handleDecrease,
  handleRemove,
  max = 100,
}: QuantityProps) {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <ButtonGroup size="small">
          <Button
            aria-label="Increase"
            onClick={handleIncrease}
            disabled={value < 1 || value >= max}
          >
            <HiOutlinePlusSm />
          </Button>
          <Button
            aria-label="Decrease"
            onClick={handleDecrease}
            disabled={value <= 1}
          >
            <HiOutlineMinusSm />
          </Button>
        </ButtonGroup>

        <IconButton aria-label="Remove" onClick={handleRemove}>
          <Badge color="secondary" badgeContent={value}>
            <HiOutlineTrash />
          </Badge>
        </IconButton>
      </Stack>
    </>
  )
}

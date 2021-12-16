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
  increase: () => any
  decrease: () => any
  handleRemove: React.MouseEventHandler<HTMLButtonElement>
  max?: number
}
export default function Quantity({
  value,
  increase,
  decrease,
  handleRemove,
  max = 100,
}: QuantityProps) {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <ButtonGroup size="small">
          <Button
            aria-label="increase"
            onClick={increase}
            disabled={value < 1 || value >= max}
          >
            <HiOutlinePlusSm />
          </Button>
          <Button aria-label="reduce" onClick={decrease} disabled={value <= 1}>
            <HiOutlineMinusSm />
          </Button>
        </ButtonGroup>

        <IconButton aria-label="delete" onClick={handleRemove}>
          <Badge color="secondary" badgeContent={value}>
            <HiOutlineTrash />
          </Badge>
        </IconButton>
      </Stack>
    </>
  )
}

import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material'
import { MdKeyboardArrowUp } from 'react-icons/md'

type Props = {
  target?: HTMLElement
  bottom?: number
  right?: number
  left?: number
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ScrollTop({
  target,
  bottom = 16,
  right = 16,
  left,
  onClick,
}: Props) {
  const trigger = useScrollTrigger({
    target,
    disableHysteresis: true,
  })

  const handleClick = (event: any) => {
    const anchor = target || window
    if (anchor) {
      onClick && onClick(event)
      anchor.scrollTo({
        behavior: 'smooth',
        top: 0,
      })
    }
  }

  return (
    <Box role="presentation" sx={{ position: 'relative' }}>
      <Zoom in={trigger}>
        <Fab
          onClick={handleClick}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          sx={{ position: 'absolute', bottom, right, left }}
        >
          <MdKeyboardArrowUp size={20} />
        </Fab>
      </Zoom>
    </Box>
  )
}

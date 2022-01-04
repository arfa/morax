import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material'
import { MdKeyboardArrowUp } from 'react-icons/md'

export default function ScrollTop({
  anchorTop = '#back-top-anchor',
  window,
}: any) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      anchorTop
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <MdKeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  )
}

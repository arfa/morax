import {
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  useMediaQuery,
} from '@mui/material'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import { KeyboardEventHandler } from 'react'
import { HiSearch } from 'react-icons/hi'

interface Props {
  placeholder?: string
  onSearch: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default function SearchButton({
  placeholder = 'Search ...',
  onSearch,
}: Props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const breakpoint = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <HiSearch size={20} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: breakpoint ? '90%' : '50%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
          }}
        >
          <InputBase
            placeholder={placeholder}
            inputProps={{ 'aria-label': 'Search for products..' }}
            onKeyUp={onSearch}
            startAdornment={
              <InputAdornment position="end" sx={{ mr: 2 }}>
                <HiSearch size={20} />
              </InputAdornment>
            }
          />
        </Paper>
      </Modal>
    </div>
  )
}

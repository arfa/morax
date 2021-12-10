import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import SignUp from './SignUp'
import SignIn from './SignIn'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Auth() {
  const [open, setOpen] = React.useState(false)
  const [isMember, setIsMember] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <IconButton
        size="large"
        aria-label="search"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
        color="inherit"
      >
        <HiOutlineUser />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isMember ? (
            <SignIn
              toggle={() => {
                setIsMember(false)
              }}
            />
          ) : (
            <SignUp
              toggle={() => {
                setIsMember(true)
              }}
            />
          )}
        </Box>
      </Modal>
    </div>
  )
}

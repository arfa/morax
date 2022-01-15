import useLogout from '@framework/auth/use-logout'
import {
  Avatar,
  Divider,
  Fade,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { IoLogOutOutline } from 'react-icons/io5'

interface Props {
  firstName: string
  lastName?: string
  image?: string
  email?: string
}

export default function DropdownMenu({
  image,
  firstName = '',
  lastName = '',
  email = '',
}: Props) {
  const logout = useLogout()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Avatar sx={{ width: 32, height: 32 }} alt={firstName} src={image}>
          {firstName[0]}
        </Avatar>
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Avatar
              sx={{ width: 100, height: 100, marginBottom: '15px' }}
              alt={firstName}
              src={image}
            >
              {firstName[0]}
            </Avatar>
            <Typography variant="body2">
              {firstName} {lastName}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#5f6368',
              }}
            >
              {email}
            </Typography>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => logout()}>
          <ListItemIcon>
            <IoLogOutOutline size={20} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

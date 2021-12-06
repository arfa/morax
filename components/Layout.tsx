import {
  AppBar,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { HiOutlineShoppingCart, HiSearch } from 'react-icons/hi'
export default function Layout({ children }: any) {
  const languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'ar', label: 'Arabic' },
  ]
  const [auth, setAuth] = React.useState(false)

  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6" color="inherit" noWrap>
            SHOP
          </Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={''}
              onChange={() => {}}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {languages.map((language) => (
                <MenuItem key={language.value} value={language.value}>
                  {language.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack spacing={2} direction="row">
            <IconButton
              size="large"
              aria-label="search"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <HiSearch />
            </IconButton>
            {!auth && <Button color="inherit">Login</Button>}
            <IconButton
              size="large"
              aria-label="cart"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <HiOutlineShoppingCart />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

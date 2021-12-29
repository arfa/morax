import UserNav from 'containers/UserNav/UserNav'
import {
  AppBar,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import Cart from '../components/cart/cart'
import SearchbarBlock from './searchbar-block'
export default function Layout({ children }: any) {
  const languages = ['English', 'French', 'Arabic']
  const [auth, setAuth] = React.useState(false)
  const [currentLanguage, setCurrentLanguage] = React.useState(languages[0])

  const handleLanguageChange = (event: any) => {
    setCurrentLanguage(event.target.value)
  }
  console.log(currentLanguage)

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar sx={{ boxShadow: 'none' }}>
          <Link href="/" passHref>
            <Typography
              sx={{ flexGrow: 1 }}
              variant="h6"
              color="inherit"
              noWrap
            >
              SHOP
            </Typography>
          </Link>
          <SearchbarBlock />
          <Divider sx={{ height: 28, marginX: 2 }} orientation="vertical" />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              sx={{ border: '0px' }}
              value={currentLanguage}
              label={currentLanguage}
              onChange={handleLanguageChange}
              input={<OutlinedInput />}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {languages.map((language, index) => (
                <MenuItem key={index} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack spacing={2} direction="row">
            <Cart />
            <Link href="/wishlist" passHref>
              <IconButton
                size="large"
                aria-label="search"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {}}
                color="inherit"
              >
                <HiOutlineHeart />
              </IconButton>
            </Link>
            <UserNav />
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

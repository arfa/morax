import Auth from '@components/auth/Auth'
import {
  AppBar,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import Link from 'next/link'
import React from 'react'
import { HiOutlineHeart, HiSearch } from 'react-icons/hi'
import Cart from './cart'
export default function Layout({ children }: any) {
  const languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'ar', label: 'Arabic' },
  ]
  const [auth, setAuth] = React.useState(false)
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }))
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
          <Search>
            <SearchIconWrapper>
              <HiSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
            {' '}
            <IconButton
              size="large"
              aria-label="search"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <Link href="/search" passHref>
                <HiSearch />
              </Link>
            </IconButton>
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
            {!auth && <Auth />}
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

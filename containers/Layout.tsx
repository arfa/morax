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
import useScrollTrigger from '@mui/material/useScrollTrigger'
import PropTypes from 'prop-types'
function ElevationScroll(props: any) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}
export default function Layout(props: any) {
  const languages = ['English', 'French', 'Arabic']
  const [auth, setAuth] = React.useState(false)
  const [currentLanguage, setCurrentLanguage] = React.useState(languages[0])

  const handleLanguageChange = (event: any) => {
    setCurrentLanguage(event.target.value)
  }

  return (
    <>
      <ElevationScroll {...props}>
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
      </ElevationScroll>
      {props.children}
      <div>dddddd</div> <div>dddddd</div> <div>dddddd</div> <div>dddddd</div>{' '}
      <div>dddddd</div> <div>dddddd</div> <div>dddddd</div>
    </>
  )
}

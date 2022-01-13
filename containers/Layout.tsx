import Cookies from '@components/layouts/cookies'
import Footer from '@components/layouts/footer'
import ScrollTop from '@components/layouts/scroll-top'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import {
  AppBar,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import MUILink from '@mui/material/Link'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import UserNav from 'containers/UserNav/UserNav'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import { FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi'
import { HiOutlineHeart } from 'react-icons/hi'
import Cart from './cart/cart'
import SearchbarBlock from './searchbar-block'
import Chatwoot from '@components/Chatwoot'
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
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()

  const socials = [
    {
      icon: <FiFacebook />,
      name: 'facebook',
      link: 'https://www.facebook.com',
    },
    {
      icon: <FiInstagram />,
      name: 'Instagram',
      link: 'https://www.instagram.com',
    },
    {
      icon: <FiGithub />,
      name: 'Github',
      link: 'https://github.com',
    },
  ]
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="sticky" color="inherit">
          <Toolbar sx={{ boxShadow: 'none' }}>
            <Link href="/" passHref>
              <MUILink color="inherit" underline="none" sx={{ flexGrow: 1 }}>
                <Typography variant="h6" noWrap>
                  SHOP
                </Typography>
              </MUILink>
            </Link>
            <SearchbarBlock />
            <Divider sx={{ height: 28, marginX: 2 }} orientation="vertical" />
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Cart />
              <Link href="/wishlist" passHref>
                <IconButton
                  size="large"
                  aria-label="search"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                >
                  <HiOutlineHeart color="#DB7093" />
                </IconButton>
              </Link>
              <UserNav />
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {props.children}
      </Container>
      <Chatwoot />
      <Cookies visible={!acceptedCookies} onClick={() => onAcceptCookies()} />
      <ScrollTop />
      <Footer
        socials={socials}
        copyright="&copy; 2020 Transcend, Inc. All rights reserved."
      />
    </>
  )
}

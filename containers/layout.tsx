import ThemeSwither from '@components/buttons/theme.switcher'
import Cookies from '@components/layouts/cookies'
import Footer from '@components/layouts/footer'
import Logo from '@components/layouts/logo'
import ScrollTop from '@components/layouts/scroll-top'
import { useAcceptCookies } from '@lib/hooks/useAcceptCookies'
import {
  AppBar,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import UserNav from 'containers/user-nav/user-nav'
import Link from 'next/link'
import Script from 'next/script'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect } from 'react'
import { FiFacebook, FiGithub, FiInstagram } from 'react-icons/fi'
import { HiOutlineHeart } from 'react-icons/hi'
import useThemeMode from 'styles/use-template-mode'
import Cart from './cart/cart'
import SearchButtonCtn from './search-container'

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
  const { theme, setDarkMode } = useThemeMode()
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default
  }, [theme])

  const onThemeSwitch = useCallback(() => {
    setDarkMode(theme.palette.mode === 'light' ? 'dark' : 'light')
  }, [theme, setDarkMode])

  return (
    <>
      <Script
        src={`https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_ID}/default`}
        strategy="afterInteractive"
      />
      <ThemeProvider theme={theme}>
        <ElevationScroll {...props}>
          <AppBar
            position="sticky"
            sx={{ backgroundColor: 'background.default' }}
          >
            <Toolbar sx={{ boxShadow: 'none' }}>
              <Logo title="SHOP" />
              <SearchButtonCtn />
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
                    color="primary"
                  >
                    <HiOutlineHeart />
                  </IconButton>
                </Link>
                <ThemeSwither
                  onClick={onThemeSwitch}
                  mode={theme.palette.mode}
                />
                <UserNav />
              </Stack>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Container
          maxWidth="xl"
          sx={{ pt: 4, pb: 4, bgcolor: 'background.default' }}
        >
          {props.children}
        </Container>
        <Cookies visible={!acceptedCookies} onClick={() => onAcceptCookies()} />
        <ScrollTop />
        <Footer
          socials={socials}
          copyright="&copy; 2020 Transcend, Inc. All rights reserved."
        />
      </ThemeProvider>
    </>
  )
}

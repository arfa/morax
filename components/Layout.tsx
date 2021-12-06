import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
export default function Layout({ children }: any) {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SHOP
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

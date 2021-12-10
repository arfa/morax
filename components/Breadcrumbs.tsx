import { Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import * as React from 'react'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function AppBreadcrumbs() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ]
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}

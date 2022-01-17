import { Stack, Typography } from '@mui/material'

export default function Custom404() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography
        component="h1"
        variant="h5"
        sx={{ display: 'flex', alignItems: 'center', height: '70vh' }}
      >
        404 - Page Not Found
      </Typography>
    </Stack>
  )
}

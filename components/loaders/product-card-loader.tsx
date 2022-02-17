import { Card } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import * as React from 'react'

export default function ProductCardLoader() {
  return (
    <Card>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={'100%'} height={150} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
          sx={{ paddingTop: '10px', paddingX: '24px' }}
        >
          <Skeleton variant="text" width={'70%'} />{' '}
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ paddingBottom: '24px', paddingX: '24px' }}
        >
          <Skeleton variant="text" width={'20%'} />
          <Skeleton variant="circular" width={40} height={40} />
        </Stack>
      </Stack>
    </Card>
  )
}

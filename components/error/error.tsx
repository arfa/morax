import { Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { MdHome } from 'react-icons/md'
interface Props {
  errorCode?: 404 | 500
}

export default function Error({ errorCode = 404 }: Props) {
  const errorTitle = (code: any) => {
    switch (code) {
      case 404:
        return 'Looks like you are lost'
      case 500:
        return 'Server Side Error Occured'
      default:
        return 'Looks like you are lost'
    }
  }
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: '70vh' }}
    >
      <Typography variant="h1" gutterBottom component="div">
        {errorCode}
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        {errorTitle(errorCode)}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        We can't find the page you're looking for
      </Typography>
      <Link href="/" passHref>
        <Button
          startIcon={<MdHome />}
          sx={{
            mt: 3,
            px: 2,
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            '&:hover': { backgroundColor: '#3a3a3a', border: 'none' },
          }}
        >
          Go Home
        </Button>
      </Link>
    </Stack>
  )
}

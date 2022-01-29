import { Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { MdHome } from 'react-icons/md'
import Link from 'next/link'
interface Props {
  errorCode?: 404 | 500
}

export default function Error({ errorCode = 404 }: Props) {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Image
        src={`/assets/images/${errorCode}.svg`}
        alt={`Error ${errorCode}`}
        width={822}
        height={492}
      />
      <Typography variant="h4" gutterBottom component="div">
        Looks like you are lost
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

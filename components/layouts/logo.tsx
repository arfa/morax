import { Typography } from '@mui/material'
import MUILink from '@mui/material/Link'
import Link from 'next/link'

interface Props {
  title: string
  path?: string
}
export default function Logo({ title = 'Transcend', path = '/' }: Props) {
  return (
    <Link href={path} passHref>
      <MUILink underline="none" sx={{ flexGrow: 1 }}>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </MUILink>
    </Link>
  )
}

import { Avatar, Box, Rating, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
interface Props {
  imageUrl: string | undefined
  imageAlt: string | undefined
  title: string
  subtitle: string
  ratingValue: number | undefined
  body?: string
}
export default function Review({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  ratingValue = 3,
  body,
}: Props) {
  return (
    <>
      <Stack direction="row">
        <Avatar
          alt={imageAlt}
          src={imageUrl}
          sx={{
            width: '60px',
            height: '60px',
            marginX: '16px',
          }}
          variant="rounded"
        />

        <Stack direction="column">
          <Typography variant="body2">{title}</Typography>
          <Typography variant="caption" color={grey[700]}>
            {subtitle}
          </Typography>
          <Rating name="read-only" value={ratingValue} readOnly />
        </Stack>
      </Stack>
      <Typography component="div" variant="body2">
        <Box sx={{ textAlign: 'left', m: 2, color: grey[600] }}>{body}</Box>
      </Typography>
    </>
  )
}

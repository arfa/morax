import { Avatar, Rating, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export enum Rate {
  NULL = 'null',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
}
interface Props {
  imageUrl?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  ratingValue?: Rate
  body?: string
}
export default function Review({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  ratingValue = Rate.NULL,
  body,
}: Props) {
  return (
    <>
      <Stack direction="row">
        {imageUrl && (
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
        )}

        <Stack direction="column" sx={{ marginX: imageUrl ? '0px' : '16px' }}>
          {title && <Typography variant="body2">{title}</Typography>}
          {subtitle && (
            <Typography variant="caption" color={grey[700]}>
              {subtitle}
            </Typography>
          )}

          {ratingValue && ( //@ts-ignore
            <Rating name="read-only" value={ratingValue} readOnly />
          )}
        </Stack>
      </Stack>
      {body && (
        <Typography
          component="div"
          variant="body2"
          sx={{ textAlign: 'left', m: 2, color: grey[600] }}
        >
          {body}
        </Typography>
      )}
    </>
  )
}

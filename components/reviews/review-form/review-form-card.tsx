import { Box, Card, Rating, RatingProps, Typography } from '@mui/material'
import Image from 'next/image'

interface Props extends RatingProps {
  image: string
  title: string
}
export default function ReviewFormCard({
  image,
  title,
  value,
  onChange,
}: Props) {
  return (
    <Card
      sx={{
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        minWidth: '100%',
        minHeight: '100%',
        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '64%',
          bottom: 0,
          zIndex: 1,
          background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
        },
      }}
    >
      <Image src={image} alt="product" layout="fill" objectFit="cover" />
      <Box
        py={3}
        px={2}
        sx={{
          position: 'absolute',
          zIndex: 2,
          bottom: 0,
          width: '100%',
        }}
      >
        <Typography variant="h6" color="#ffffff">
          {title}
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={onChange}
          precision={0.5}
          sx={{ marginTop: 1 }}
        />
      </Box>
    </Card>
  )
}

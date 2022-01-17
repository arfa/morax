import { Avatar, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

interface Props {
  imageUrl: string | undefined
  imageAlt: string | undefined
  name: string
  price: string
}
const ProductSearchCard = ({ imageUrl, imageAlt, name, price }: Props) => {
  return (
    <Stack direction="row">
      <Avatar
        alt={imageAlt}
        src={imageUrl}
        sx={{
          width: '76px',
          height: '76px',
          marginX: '16px',
          borderRadius: '8px',
        }}
        variant="square"
      />

      <Box>
        <Typography
          variant="h5"
          sx={{
            fontSize: '.875rem',
            lineHeight: '1.5',
            textTransform: 'none',
            whiteSpace: 'normal',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: '12px',
            lineHeight: '1.5',
            textTransform: 'none',
            whiteSpace: 'normal',
          }}
        >
          {price}
        </Typography>
      </Box>
    </Stack>
  )
}

export default ProductSearchCard

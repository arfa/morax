import { Avatar, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'

interface Props {
  imageUrl: string | undefined
  imageAlt: string | undefined
  title: string
  subtitle: string
}
const ProductSearchCard = ({ imageUrl, imageAlt, title, subtitle }: Props) => {
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
        <Typography variant="body2">{title}</Typography>
        <Typography variant="caption">{subtitle}</Typography>
      </Box>
    </Stack>
  )
}

export default ProductSearchCard

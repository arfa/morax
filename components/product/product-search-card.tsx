import { Avatar, Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { ReactNode } from 'react'

interface Props {
  imageUrl: string | undefined
  imageAlt: string | undefined
  title: ReactNode
  subtitle: string
}
const ProductSearchCard = ({ imageUrl, imageAlt, title, subtitle }: Props) => {
  return (
    <Stack direction="row" sx={{ py: 2 }}>
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
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
    </Stack>
  )
}

export default ProductSearchCard

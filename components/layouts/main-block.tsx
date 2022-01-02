import { Container, Grid, Stack } from '@mui/material'

interface Props {
  rightBlock: React.ReactElement
  leftBlock: React.ReactElement
}
const MainBlock = ({ leftBlock, rightBlock }: Props) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Stack direction="row" spacing={4}>
        {/* Category list */}
        <Grid item xs={12} md={3} lg={3} padding={0} margin={0} border={0}>
          {leftBlock}
        </Grid>
        {/* Product list */}
        <Grid item xs={12} md={9} lg={9}>
          {rightBlock}
        </Grid>
      </Stack>
    </Container>
  )
}

export default MainBlock

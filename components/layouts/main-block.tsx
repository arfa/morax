import { Grid } from '@mui/material'

interface Props {
  rightBlock: React.ReactElement
  leftBlock: React.ReactElement
}
const MainBlock = ({ leftBlock, rightBlock }: Props) => {
  return (
    <Grid container border={0} padding={0} sx={{ height: '75vh' }}>
      {/* Category list */}
      <Grid item xs={12} md={3} margin={0} border={0}>
        {leftBlock}
      </Grid>
      {/* Product list */}
      <Grid item xs={12} md={9} sx={{ backgroundColor: 'background.paper' }}>
        {rightBlock}
      </Grid>
    </Grid>
  )
}

export default MainBlock

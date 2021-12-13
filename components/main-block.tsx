import { Container, Grid, Paper } from '@mui/material'

interface Props {
  rightBlock: React.ReactElement
  leftBlock: React.ReactElement
}
const MainBlock = ({ leftBlock, rightBlock }: Props) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Category list */}

        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              backgroundColor: 'rgb(255, 255, 255)',
              color: 'rgba(0, 0, 0, 0.87)',
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              overflow: 'hidden',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
            }}
          >
            {leftBlock}
          </Paper>
        </Grid>

        {/* Product list */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper
            sx={{
              maxWidth: 'xl',
              backgroundColor: 'rgb(255, 255, 255)',
              color: 'rgba(0, 0, 0, 0.87)',
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              overflow: 'hidden',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
            }}
          >
            {rightBlock}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainBlock

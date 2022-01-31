import { Grid, Typography } from '@mui/material'

interface social {
  icon?: any
  name: string
  link: string
}
interface Props {
  socials?: social[]
  copyright?: string
}

export default function Footer({ socials, copyright }: Props) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={0}
      border={0}
      sx={{bgcolor: 'background.default'}}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding={0}
        border={0}
      >
        {socials?.map(({ icon, name, link }) => (
          <Grid
            item
            key={name}
            component={'a'}
            target="_blank"
            rel="noreferrer noopener"
            href={link}
            padding={2}
            border={0}
          >
            <Typography color="primary" variant="body2">
              {icon}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography color="primary" variant="body2">
        {copyright}
      </Typography>
    </Grid>
  )
}

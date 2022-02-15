import {
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  RatingProps,
  TextField,
  Typography,
} from '@mui/material'

interface Props extends RatingProps {
  title: string
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}

export default function ReviewFormInput({
  title,
  value,
  onChange,
  onSubmit,
}: Props) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={8}
      component={Paper}
      elevation={6}
      square
      sx={{ border: 'none' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{ mt: 1, border: 'none' }}
        >
          <Typography variant="h6">{title}</Typography>
          <Rating
            name="rating"
            value={value}
            onChange={onChange}
            precision={0.5}
            sx={{ marginTop: 1 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Subject"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Comments"
            name="text"
            autoComplete="comments"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Review
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}

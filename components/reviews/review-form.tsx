import { Card, Rating, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import * as React from 'react'

interface Props {
  image: string
  title: string
  rating?: number
  onSubmit?: (_args: any) => any
}
export default function ReviewForm({
  image = 'https://source.unsplash.com/random',
  title = 'Product Name',
  rating = 5,
  onSubmit,
}: Props) {
  const [rate, setRate] = React.useState<number | null>(rating)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = [...new FormData(event.currentTarget)].reduce(
      (o: any, [k, v]) => {
        o[k] = v
        return o
      },
      {}
    )
    onSubmit &&
      onSubmit({
        rate,
        ...data,
      })
  }

  return (
    <Grid container>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          border: 'none',
        }}
      >
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
            sx={{ position: 'absolute', zIndex: 2, bottom: 0, width: '100%' }}
          >
            <Typography variant="h6" color="#ffffff">
              {title}
            </Typography>
            <Rating
              name="simple-controlled"
              value={rate}
              onChange={(event, newValue) => {
                setRate(newValue)
              }}
              sx={{ marginTop: 1 }}
            />
          </Box>
        </Card>
      </Grid>
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
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, border: 'none' }}
          >
            <Typography variant="h6">{title}</Typography>
            <Rating
              name="simple-controlled"
              value={rate}
              onChange={(event, newValue) => {
                setRate(newValue)
              }}
              sx={{ marginTop: 1 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="full-name"
              label="Full Name"
              name="full-name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="review-subject"
              label="Subject"
              name="review-subject"
              autoComplete="subject"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="comments"
              label="Comments"
              name="comments"
              autoComplete="comments"
              autoFocus
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
    </Grid>
  )
}

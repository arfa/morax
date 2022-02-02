import round from '@components/reviews/round'
import {
  Box,
  Button,
  Card,
  Dialog,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

interface Props {
  image: string
  title: string
  rate?: number
  disabled?: boolean
  onSubmit?: (_args: any) => any
}
export default function ReviewForm({
  image = 'https://source.unsplash.com/random',
  title = 'Product Name',
  rate = 5,
  disabled = false,
  onSubmit,
}: Props) {
  // Dialog handle
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  // Rating Form
  const [rating, setRating] = React.useState<number | null>(round(rate, 0.5))
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
        ...data,
        rating,
      })
    handleClose()
  }
  return (
    <>
      <Button
        variant="text"
        size="small"
        onClick={handleClickOpen}
        disabled={disabled}
      >
        Write a Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'md'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid container>
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
              <Image
                src={image}
                alt="product"
                layout="fill"
                objectFit="cover"
              />
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
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue)
                  }}
                  precision={0.5}
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
                onSubmit={handleSubmit}
                sx={{ mt: 1, border: 'none' }}
              >
                <Typography variant="h6">{title}</Typography>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue)
                  }}
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
        </Grid>
      </Dialog>
    </>
  )
}

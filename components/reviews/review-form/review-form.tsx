import round from '@components/reviews/round'
import { Button, Dialog, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import ReviewFormCard from './review-form-card'
import ReviewFormInput from './review-form-input'

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
        fullWidth
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
            <ReviewFormCard
              image={image}
              title={title}
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
            />
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
            <ReviewFormInput
              title={title}
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              onSubmit={handleSubmit}
            />
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}

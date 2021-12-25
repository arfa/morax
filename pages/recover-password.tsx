import useCustomer from '@framework/customer/use-customer'
import { Alert, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { validate } from 'email-validator'
import Link from 'next/link'
import Router from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'

export default function ForgotPassword() {
  // Form State
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const { data: customer } = useCustomer()

  useEffect(() => {
    if (customer) {
      Router.push('/')
    }
  })

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handleResetPassword = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }
  }

  const handleValidation = useCallback(() => {
    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email))
    }
  }, [email, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <HiOutlineLockClosed />
        </Avatar>
        <Box
          component="form"
          noValidate
          onSubmit={handleResetPassword}
          sx={{ mt: 3 }}
        >
          {message && (
            <Alert sx={{ marginY: 2 }} severity="error">
              {message}
            </Alert>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Recover Password
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

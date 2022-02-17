import useSignup from '@framework/auth/use-signup'
import useCustomer from '@framework/customer/use-customer'
import { Alert, Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { validate } from 'email-validator'
import Link from 'next/link'
import Router from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'

export default function SignUp() {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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

  const signup = useSignup()
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }
  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value)
  }
  const handleSignup = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await signup({
        email,
        password,
        firstName,
        lastName,
      })
      setLoading(false)
    } catch ({ errors }) {
      // @ts-ignore
      setMessage(errors[0]?.message)
      setLoading(false)
    }
  }
  const handleValidation = useCallback(() => {
    // Test for Alphanumeric password
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    // Unable to send form unless fields are valid.
    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 5,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <HiOutlineLockClosed />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
          {message && (
            <Alert sx={{ marginY: 2 }} severity="error">
              {message}
            </Alert>
          )}
          <Grid container spacing={2} border={0} padding={0}>
            <Grid item xs={12} sm={6} border={0}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} border={0}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} border={0}>
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
            <Grid item xs={12} border={0}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid
                container
                justifyContent="flex-end"
                border={0}
                paddingX={0}
                sx={{ fontSize: 14 }}
              >
                <Link href="/login" passHref>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { color: 'text.primary' },
                    }}
                  >
                    {'Already have an account? Sign in'}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

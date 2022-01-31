import useLogin from '@framework/auth/use-login'
import useCustomer from '@framework/customer/use-customer'
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { validate } from 'email-validator'
import Link from 'next/link'
import Router from 'next/router'
import { FC, useCallback, useEffect, useState } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'

const SignIn: FC = () => {
  // Form State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }
  const login = useLogin()
  const handleLogin = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    if (!dirty && !disabled) {
      setDirty(true)
      handleValidation()
    }

    try {
      setLoading(true)
      setMessage('')
      await login({
        email,
        password,
      })
      setLoading(false)
    } catch ({ errors }) {
      // @ts-ignore
      setMessage(errors[0]?.message)
      setLoading(false)
      setDisabled(false)
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
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          {message && (
            <Alert severity="error" sx={{ fontSize: 12, marginY: 2 }}>
              {message}.{' '}
              <Link href="/recover-password">forgot your password?</Link>
            </Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container border={0} paddingX={0} sx={{ fontSize: 14 }}>
            <Link href="/register" passHref>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: 'pointer', '&:hover': { color: 'text.primary' } }}
              >
                {"Don't have an account? Sign Up"}
              </Typography>
            </Link>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default SignIn

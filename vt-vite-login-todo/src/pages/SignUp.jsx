import { Container, TextField, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const SignUp = () => {

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom>
        Sign Up Page
      </Typography>
      <TextField label='Name' type='text' fullWidth margin='normal' />
      <TextField label='Email' fullWidth margin='normal' />
      <TextField label='Password' type='password' fullWidth margin='normal' />
      <TextField
        label='Confirm Password'
        type='password'
        fullWidth
        margin='normal'
      />
      <Button variant='contained' color='primary' fullWidth>
        Sign Up
      </Button>
      <p style={{ textAlign: 'center' }}>
        Have an account? <Link to='/login'>Log in</Link>
      </p>
    </Container>
  )
}

export default SignUp

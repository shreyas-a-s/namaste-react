import { Container, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Container>
  )
}

export default Login

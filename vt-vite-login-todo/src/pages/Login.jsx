import { Container, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
      <p style={{ textAlign: 'center' }}>Don&apos;t have an account? <Link to="/signup">Sign up</Link></p>
    </Container>
  )
}

export default Login

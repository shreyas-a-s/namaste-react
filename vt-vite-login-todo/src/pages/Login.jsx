import { Container, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <form >
        <TextField label="Email" fullWidth margin="normal" required />
        <TextField label="Password" type="password" fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <p style={{ textAlign: 'center' }}>Don&apos;t have an account? <Link to="/signup">Sign up</Link></p>
    </Container>
  )
}

export default Login

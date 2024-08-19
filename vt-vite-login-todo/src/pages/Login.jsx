import { Container, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const userList = JSON.parse(localStorage.getItem('localUserList')) || [];
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = userList.find(user => user.email === loginData.email);

    if (!user) {
      alert("Account with this email does not exist!");
      return;
    }

    if (user.password !== loginData.password) {
      alert("Wrong password!");
      return;
    }

    localStorage.setItem("localUserData", JSON.stringify(loginData));
    navigate("/todo");
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} fullWidth margin="normal" required />
        <TextField label="Password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} type="password" fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <p style={{ textAlign: 'center' }}>Don&apos;t have an account? <Link to="/signup">Sign up</Link></p>
    </Container>
  )
}

export default Login

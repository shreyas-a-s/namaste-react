import { Container, TextField, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    todoList: []
  })
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userList, setUserList] = useState(() => {
    // Initialize state from localStorage if available
    const savedUserList = localStorage.getItem('localUserList');
    return savedUserList ? JSON.parse(savedUserList) : [];
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userList.some(user => user.email === userData.email)) {
      alert("Account with the same email id exists!");
      return
    }

    if (userData.password !== confirmPassword) {
      alert("Passwords don't match!");
      return
    }

    setUserList(() => {
      const updatedUserList = [...userList, userData];
      localStorage.setItem("localUserList", JSON.stringify(updatedUserList));
      alert("Account successfully created! Login with credentials.");
      navigate("/login");
      return updatedUserList;
    });
  }

  useEffect(() => {
    if (localStorage.getItem("localUserEmail")) {
      navigate("/todo");
    }
  }, [navigate]);
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' component='h1' gutterBottom>
        Sign Up Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Name'
          type='text'
          value={userData.name}
          onChange={(e) => setUserData({...userData, name: e.target.value})}
          fullWidth
          margin='normal'
          required
        />
        <TextField
          label='Email'
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          fullWidth
          margin='normal'
          required
        />
        <TextField
          label='Password'
          type='password'
          value={userData.password}
          onChange={(e) => setUserData({...userData, password: e.target.value})}
          fullWidth
          margin='normal'
          required
        />
        <TextField
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          margin='normal'
          required
        />
        <Button type="submit" variant='contained' color='primary' fullWidth>
          Sign Up
        </Button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Have an account? <Link to='/login'>Log in</Link>
      </p>
    </Container>
  )
}

export default SignUp

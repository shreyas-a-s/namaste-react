import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("localUserEmail")) {
      alert("You must log in to use this app.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the Todo Page
      </Typography>
      {/* Additional content goes here */}
    </Container>
  )
}

export default Todo

import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = () => {
  const [newTodo, setNewTodo] = useState({
    id: null,
    text: "",
    isDone: false
  });
  const [userList, setUserList] = useState(JSON.parse(localStorage.getItem('localUserList')) || []);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('localUserEmail') || "";

  useEffect(() => {
    if (!localStorage.getItem("localUserEmail")) {
      alert("You must log in to use this app.");
      navigate("/login");
    }

    localStorage.setItem("localUserList", JSON.stringify(userList));
  }, [navigate, userList]);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateTodoList();
    console.log(userList);
  }

  const updateTodoList = () => {
    setUserList((prevArray) =>
      prevArray.map((user) =>
        user.email === userEmail
          ? {
            ...user,
            todoList: [...user.todoList, newTodo],
          }
          : user
      )
    );
  };

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Welcome to Todo Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <TextField
            label="Enter Todo"
            value={newTodo.text}
            onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
            fullWidth
            required
            sx={{ flex: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              height: "3.4rem",
            }}
          >
            <AddIcon />
          </Button>
        </Box>
      </form>
      <Box>
        {/* {items.map((item) => ( */}
          <FormControlLabel
            // key={item.id}
            control={
              <Checkbox
                checked={true}
              />
            }
          label={
            <Typography sx={{ fontSize: '1.1rem' }}>
              My first todo
            </Typography>
          }
          />
        <IconButton
          color="error"
        >
          <DeleteIcon />
        </IconButton>
        {/* ))} */}
      </Box>
    </Container>
  )
}

export default Todo

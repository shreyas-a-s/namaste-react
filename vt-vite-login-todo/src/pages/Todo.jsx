import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

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

    const uniqueTodo = {...newTodo, id: uuidv4()}
    setNewTodo(uniqueTodo);
    updateTodoList(uniqueTodo);
    setNewTodo({...newTodo, text: ""})
  }

  const updateTodoList = (uniqueTodo) => {
    setUserList((prevArray) =>
      prevArray.map((user) =>
        user.email === userEmail
          ? {
            ...user,
            todoList: [...user.todoList, uniqueTodo],
          }
          : user
      )
    );
  };

  const handleSignOut = () => {
    localStorage.removeItem("localUserEmail");
    navigate("/login");
  }

  const handleDelete = (id) => {
    setUserList((prevUserList) =>
      prevUserList.map((user) =>
        user.email === userEmail
          ? {
            ...user,
            todoList: user.todoList.filter((item) => item.id !== id),
          }
          : user
      )
    );
  };

  const handleTodoToggle = (id) => {
    setUserList((prevUserList) =>
      prevUserList.map((user) =>
        user.email === userEmail
          ? {
            ...user,
            todoList: user.todoList.map((todo) =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ),
          }
          : user
      )
    );
  }

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Hi, {userList.find(user => user.email === userEmail).name}
        <br />
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        { userEmail && userList.find(user => user.email === userEmail).todoList.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={item.isDone}
                  onChange={() => handleTodoToggle(item.id)}
                />
              }
              label={
                <Typography sx={{ fontSize: '1.1rem', textDecoration: item.isDone ? 'line-through' : 'none' }}>
                  {item.text}
                </Typography>
              }
            />
            <IconButton
              color="error"
              onClick={() => handleDelete(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: 'center', margin: '2rem' }}>
        <Button onClick={handleSignOut} variant='contained' color='error'>
          Sign Out
        </Button>
      </Box>
    </Container>
  )
}

export default Todo

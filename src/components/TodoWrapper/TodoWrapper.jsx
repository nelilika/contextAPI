import { useContext } from 'react';
import './TodoWrapper.scss';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import { TodoContextComponent } from '../../context/Context';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { loginUser, logoutUser } from '../../reducer/todoReducer';

function TodoWrapper() {
  const [{ todos, user }, dispatch] = useContext(TodoContextComponent);

  return (
    <div className="todo-app">
      {user ? (
        <div className="user-header">
          <Avatar alt="Remy Sharp" src="happy-cat.jpg" />
          <Typography className="header" variant="h5" component="h5">
            Welcome back, *username*
          </Typography>
        </div>
      ) : (
        <h1 className="header" variant="h5" component="h5">
          What's plan for Today, bro?
        </h1>
      )}
      <AddTodo />
      <Button
        onClick={() => dispatch(user ? logoutUser() : loginUser())}
        variant="text"
      >
        {user ? 'Logout User' : 'Login User'}
      </Button>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoWrapper;

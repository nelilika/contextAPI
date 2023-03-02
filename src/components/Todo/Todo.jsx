import { useState, useContext } from 'react';
import { FiEdit2, FiX } from 'react-icons/fi';
import AddTodo from '../AddTodo/AddTodo';
import { TodoContextComponent } from '../../context/Context';
// import './Todo.scss';
import todoClasses from './Todo.module.scss';
import { completeTodo, removeTodo } from '../../reducer/todoReducer';

function Todo({ todo }) {
  const [editedTodo, setEditedTodo] = useState(null);
  const [, dispatch] = useContext(TodoContextComponent);

  let classes = [todoClasses.todoRow];

  if (todo.isCompleted) {
    classes = [...classes, todoClasses.complete];
  }

  if (editedTodo) {
    return <AddTodo editedTodo={editedTodo} setEditedTodo={setEditedTodo} />;
  }

  return (
    <div className={classes.join(' ')}>
      <div onClick={() => dispatch(completeTodo(todo.id))}>{todo.text}</div>
      <div className={todoClasses.icons}>
        <FiX onClick={() => dispatch(removeTodo(todo.id))} />
        {!todo.isCompleted && (
          <FiEdit2 onClick={() => setEditedTodo({ ...todo })} />
        )}
      </div>
    </div>
  );
}

export default Todo;

import { useRef, useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContextComponent } from '../../context/Context';
import { addTodo, updateTodo } from '../../reducer/todoReducer';
import './AddTodo.scss';

function AddTodo(props) {
  const { editedTodo, setEditedTodo } = props;
  const [newTodo, setNewTodo] = useState(editedTodo ? editedTodo.text : '');
  const inputRef = useRef('');
  const [, dispatch] = useContext(TodoContextComponent);

  const onChange = function (event) {
    setNewTodo(event.target.value);
  };

  // componentDidUpdate
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const onSubmit = function (event) {
    event.preventDefault();

    if (editedTodo) {
      const todo = {
        ...editedTodo,
        text: newTodo,
      };
      dispatch(updateTodo(todo));
      setEditedTodo(null);
    } else {
      const todo = {
        id: uuidv4(),
        text: newTodo,
        isCompleted: false,
      };
      dispatch(addTodo(todo));
    }
    setNewTodo('');
  };
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        value={newTodo}
        onChange={onChange}
        className="todo-input"
        placeholder="Add a todo"
        ref={inputRef}
      />
      <button className="todo-button">
        {editedTodo ? 'Update' : 'Add Todo'}
      </button>
    </form>
  );
}

export default AddTodo;

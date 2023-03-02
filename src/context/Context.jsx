import { createContext, useReducer } from 'react';
import { todoReducer, initialTodoState } from '../reducer/todoReducer';

export const TodoContextComponent = createContext({});

function TodoContext({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  return (
    <TodoContextComponent.Provider value={[state, dispatch]}>
      {children}
    </TodoContextComponent.Provider>
  );
}

export default TodoContext;

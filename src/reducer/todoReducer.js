export const initialTodoState = {
  todos: [],
  user: null,
};

const ADD_TODO = '[TODO] Add Todo';
const REMOVE_TODO = '[TODO] Remove Todo';
const COMPLETE_TODO = '[TODO] Complete Todo';
const UPDATE_TODO = '[TODO] Update Todo';

const LOGIN_USER = '[User] Login';
const LOGOUT_USER = '[User] Logout';

/*
 action = {
    type: '[TODO] Add Todo' || '[TODO] Remove Todo' || '[TODO] Complete Todo'
    payload: todo
 }
*/

// action function
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const completeTodo = (todoId) => ({
  type: COMPLETE_TODO,
  payload: { todoId },
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: { todoId },
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: { todo },
});

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const todoReducer = (state = initialTodoState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload.todo, ...state.todos],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.todoId),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.todoId) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        }),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.todo.id ? action.payload.todo : todo
        ),
      };
    case LOGIN_USER:
      return {
        ...state,
        user: {
          username: 'Anna Nowak',
          avatar: './happy-cat.jpg',
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

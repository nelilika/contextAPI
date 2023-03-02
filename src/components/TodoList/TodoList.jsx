import Todo from "../Todo/Todo";
import './TodoList.scss';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;

import NewForm from "./components/NewForm/NewForm";
import TodoWrapper from "./components/TodoWrapper/TodoWrapper";
import TodoContext from "./context/Context";

function App() {

  return (
    <TodoContext>
      <TodoWrapper />
    </TodoContext>
  );
}

export default App;

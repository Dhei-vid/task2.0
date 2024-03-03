import EditTask from "./components/editTask/edit-task.components";
import Todo from "./components/todo/todo.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo />
      <EditTask />
    </div>
  );
}

export default App;

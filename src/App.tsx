import EditTask from "./components/editTask/edit-task.components";
import Todo from "./components/todo/todo.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="menuBar">
        <Todo />
        <EditTask />
      </section>
    </div>
  );
}

export default App;

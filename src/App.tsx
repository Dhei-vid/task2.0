import EditTask from "./components/editTask/edit-task.components";
import Todo from "./components/todo/todo.component";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <section className="menuBar">
          <Todo />
          <EditTask />
        </section>
      </div>
    </Router>
  );
}

export default App;

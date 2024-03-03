import { EditMenuBar } from "../menuBar/menu-bar-component";
import SelectedTask from "../selectedTask/selected-task.component";
import "./edit_task.styles.scss";

const EditTask = () => {
  return (
    <div className="editContainer">
      <EditMenuBar header={"Edit Task"} />
      <div>
        <SelectedTask />
      </div>
    </div>
  );
};

export default EditTask;

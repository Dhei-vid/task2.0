import { EditMenuBar } from "../menuBar/menu-bar-component";
import "./edit_task.styles.scss";

const EditTask = () => {
  return (
    <div className="editContainer">
      <EditMenuBar header={"Edit Task"} />
    </div>
  );
};

export default EditTask;

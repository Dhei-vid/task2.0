import "./task-card.styles.scss";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as UnChecked } from "../../assets/unchecked.svg";
import Button from "../button/button.components";

interface ITaskCard {
  checked: boolean;
  title: string;
}

const TaskCard: React.FC<ITaskCard> = ({ checked, title }) => {
  return (
    <div className="taskCardContainer">
      <div className="checkedContainer">
        {checked ? <Checked /> : <UnChecked />}
        <p className="taskCardTitle">{title}</p>
      </div>
      <Button isEdit onPress={() => console.log("Edited btn")} />
    </div>
  );
};

export default TaskCard;

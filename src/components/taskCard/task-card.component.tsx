import "./task-card.styles.scss";
import { MdOutlineRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as UnChecked } from "../../assets/unchecked.svg";

interface ITaskCard {
  checked: boolean;
  title: string;
}

const TaskCard: React.FC<ITaskCard> = ({ checked, title }) => {
  return (
    <div className="taskCardContainer">
      {checked ? <Checked /> : <UnChecked />}
      <p className="taskCardTitle">{title}</p>
    </div>
  );
};

export default TaskCard;

import "./task-card.styles.scss";
import { ReactComponent as Checked } from "../../assets/checked.svg";
import { ReactComponent as UnChecked } from "../../assets/unchecked.svg";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.components";

interface ITaskCard {
  checked: boolean;
  title: string;
  onClick: () => void;
}

const TaskCard: React.FC<ITaskCard> = ({ checked, title, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className="taskCardContainer">
      <div className="checkedContainer">
        {checked ? <Checked /> : <UnChecked />}
        <p className="taskCardTitle">{title}</p>
      </div>
      <Button isEdit onPress={onClick} />
    </div>
  );
};

export default TaskCard;

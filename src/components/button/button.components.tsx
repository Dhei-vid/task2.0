import "./button.styles.scss";
import { HiPlusCircle } from "react-icons/hi2";

interface IButton {
  isDelete?: boolean;
  isSave?: boolean;
  isEdit?: boolean;
  isAdd?: boolean;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({
  isDelete,
  isSave,
  isEdit,
  isAdd,
  onPress,
}) => {
  return (
    <div>
      {isDelete && <button className="isDeleteBtn">Delete</button>}

      {isSave && <button className="isSaveBtn">Save</button>}

      {isEdit && (
        <button className={"isEditBtn"} onClick={onPress}>
          Edit
        </button>
      )}

      {isAdd && (
        <div onClick={onPress} className="isAddBtn">
          <HiPlusCircle size={70} color="#123EB1" />
        </div>
      )}
    </div>
  );
};

export default Button;

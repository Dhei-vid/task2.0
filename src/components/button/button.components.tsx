import "./button.styles.scss";
import { HiPlusCircle } from "react-icons/hi2";

interface IButton {
  isDelete?: boolean;
  isSave?: boolean;
  isEdit?: boolean;
  isAdd?: boolean;
  onPress: () => void;
  style?: string;
}

const Button: React.FC<IButton> = ({
  isDelete,
  isSave,
  isEdit,
  isAdd,
  onPress,
  style,
}) => {
  return (
    <div>
      {isDelete && <button className={`isDeleteBtn ${style}`}>Delete</button>}

      {isSave && <button className={`isSaveBtn ${style}`}>Save</button>}

      {isEdit && (
        <button className={`isEditBtn ${style}`} onClick={onPress}>
          Edit
        </button>
      )}

      {isAdd && (
        <div onClick={onPress} className={`isAddBtn ${style}`}>
          <HiPlusCircle size={70} color="#123EB1" />
        </div>
      )}
    </div>
  );
};

export default Button;
